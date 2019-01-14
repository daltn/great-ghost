import React from 'react';

const Video = () => (
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
  </div>
);

export default Video;
