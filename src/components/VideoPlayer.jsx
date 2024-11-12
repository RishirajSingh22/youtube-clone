import React from 'react';
import { useLocation } from 'react-router-dom';
import './VideoPlayer.css';

function VideoPlayer() {
  const location = useLocation();
  const { video_url, title, channel_name, views, time_ago } = location.state;

  return (
    <div className="videoPlayer">
      <div className="videoPlayer__main">
        <video controls src={video_url} />
        <h3>{title}</h3>
        <p>{channel_name} • {views} • {time_ago}</p>
        <div className="videoPlayer__actions">
          <button>Like</button>
          <button>Dislike</button>
          <button>Share</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
