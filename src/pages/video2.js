import React from 'react';

const Video2 = props => {
  return (
    <div className="vimeo-wrapper">
      <iframe
        title="roses"
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
