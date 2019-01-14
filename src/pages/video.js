import React from 'react';

const Video = props => (
  <div className="vimeo-wrapper">
    <iframe
      title="roses"
      id="video"
      src="https://player.vimeo.com/video/310698430?background=1&autoplay=1&muted=1&byline=0&title=0"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen={true}
    />

    {props.answers.map((ansr, idx) => {
      return (
        <div key={idx} id={idx} className="ansr">
          <h1>{ansr}</h1>
        </div>
      );
    })}
  </div>
);

export default Video;
