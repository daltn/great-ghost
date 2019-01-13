import React, { Component } from 'react';
import style from './index.css';
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
    };
    this.shuffleArr = this.shuffleArr.bind(this);
  }

  handlePlay() {
    this.setState({
      video: true,
    });
    this.audio.play();
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
    let quesReady = this.shuffleArr(this.state.questionBank);
    return (
      <div>
        {this.state.video && <Video />}
        <h1>bloop</h1>
        <audio
          ref={audio => {
            this.audio = audio;
          }}
          src={track}
        />
        {quesReady.slice(0, 3).map(ques => {
          return <p>{ques}</p>;
        })}
        <input
          type="button"
          value="Play"
          onClick={this.handlePlay.bind(this)}
        />
      </div>
    );
  }
}

export default Index;
