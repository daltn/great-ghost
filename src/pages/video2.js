import React from 'react';
import snoop from '../audio/Snoop-audio.mp3';

const Video2 = props => {
  return (
    <div className="vimeo-wrapper">
      <audio
        ref={audio => {
          return 'audio_tag';
        }}
        src={snoop}
        controls
        autoPlay
        id="audio"
      />
      <iframe
        title="snoop video by great ghost"
        id="video"
        src="https://player.vimeo.com/video/317325586?background=1&autoplay=1&muted=1&byline=0&title=0"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen={true}
      />
      {props.answers !== undefined ? (
        props.answers.map((ansr, idx) => {
          return (
            <div key={idx} className="ansr">
              <h1 id={props.textBool ? `ansrAfter${idx}` : `ansrBefore${idx}`}>
                {ansr}
              </h1>
            </div>
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
};

export default Video2;
