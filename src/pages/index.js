import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './index.css';
import Video from './video';
import Video2 from './video2';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: true,
      snoopVid: true,
      textBool: true,
      questionBank: [
        "What's your mantra?",
        'What would the future you tell your current self?',
        'Give yourself a new name',
        'How can you be better?',
        'Where do you see yourself in forty minutes?',
        'Describe your dance',
      ],
      answers: {
        ans0: '',
        ans1: '',
        ans2: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.shuffleArr = this.shuffleArr.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSnoopVid = this.handleSnoopVid.bind(this);
  }

  componentDidMount() {
    this.setState({
      video: !this.state.video,
      snoopVid: !this.state.snoopVid,
      questionBank: this.shuffleArr(this.state.questionBank),
    });
  }

  handleChange(e) {
    this.setState({
      answers: { ...this.state.answers, ['ans' + e.target.id]: e.target.value },
    });
  }

  handlePlay() {
    this.setState({
      video: true,
    });

    setInterval(() => {
      this.setState({ textBool: !this.state.textBool });
    }, 8000);
  }

  handleSnoopVid() {
    this.setState({
      snoopVid: true,
    });

    setInterval(() => {
      this.setState({ textBool: !this.state.textBool });
    }, 6000);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  shuffleArr(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    return (
      <div id="bod">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Nudity For Beginners</title>
          <link rel="canonical" href="https://nudityforbeginners.com" />
        </Helmet>
        <div>
          {this.state.video && (
            <Video
              answers={Object.values(this.state.answers)}
              textBool={this.state.textBool}
            />
          )}
          {this.state.snoopVid && (
            <Video2
              answers={Object.values(this.state.answers)}
              textBool={this.state.textBool}
            />
          )}
        </div>
        <div>
          <form
            onSubmit={this.handleSubmit}
            className={
              this.state.video || this.state.snoopVid ? 'fadeOut' : 'normForm'
            }
          >
            <p id="welcome">Welcome To The Dance</p>
            {this.state.questionBank.slice(0, 3).map((ques, idx) => {
              return (
                <div id="questions" key={idx}>
                  <label htmlFor="question">{ques}</label>
                  <input
                    type="text"
                    id={idx}
                    className="formInput"
                    onChange={this.handleChange}
                  />
                </div>
              );
            })}
            <p>
              Have you been naked this whole time or are you just beginning?
            </p>
            <button
              id="buttons"
              type="submit"
              value="This Whole Time"
              onClick={this.handlePlay}
            >
              This Whole Time
            </button>
            <button
              id="buttons"
              type="submit"
              value="Just Beginning"
              onClick={this.handleSnoopVid}
            >
              Just Beginning
            </button>
          </form>
        </div>
        <p id="footer">
          dev by <a href="https://pulse-code.com/">pulse-code</a>{' '}
        </p>
      </div>
    );
  }
}

export default Index;
