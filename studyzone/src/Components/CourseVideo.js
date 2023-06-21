import React from 'react';
import 'video.js/dist/video-js.css'; // Replace 'path/to/video-js.css' with the actual path to the Video.js CSS file
import 'video.js/dist/video.js';
import '../Styles/App.css'; // Path to your custom CSS file

const CourseVideo = () => {
  return (
    <div>
      <video
      muted
        id="my_video_1"
        className="video-js vjs-default-skin"
        width="640px"
        height="267px"
        controls
        preload="none"
        poster="http://video-js.zencoder.com/oceans-clip.jpg"
        data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
      >
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default CourseVideo;
