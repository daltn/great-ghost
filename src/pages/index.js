import React, { Component } from 'react';
import './index.css';
import Video from './video';
import track from '../audio/roses.m4a';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      questionBank: [
        'What makes you feel welcome?',
        'What types of sounds trigger nostalgia in you?',
        'What was the end of the beginning?',
        'How do you take off your mask?',
        'What would your current day self tell your younger self?',
        'What would your future self tell your current self?',
        'Give yourself a new name',
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
  }

  componentDidMount() {
    this.setState({
      questionBank: this.shuffleArr(this.state.questionBank),
    });
  }

  handleChange(e) {
    this.setState({
      answers: {
        ['ans' + e.target.id]: e.target.value,
      },
    });
    console.log(this.state.answers);
  }

  handlePlay() {
    this.setState({
      video: true,
    });
    this.audio.play();
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
        <form
          onSubmit={this.handleSubmit}
          className={this.state.video ? 'fadeOut' : 'normForm'}
        >
          <h1>Welcome To The Dance</h1>
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
          <p>Have you been naked this whole time or are you just beginning?</p>

          <button
            id="buttons"
            type="submit"
            value="Just Beginning"
            onClick={this.handlePlay}
          >
            This Whole Time
          </button>
          <button
            id="buttons"
            type="submit"
            value="Just Beginning"
            onClick={this.handlePlay}
          >
            Just Beginning
          </button>
        </form>
        {this.state.video && <Video />}
        <audio
          ref={audio => {
            this.audio = audio;
          }}
          src={track}
        />
      </div>
    );
  }
}

export default Index;
