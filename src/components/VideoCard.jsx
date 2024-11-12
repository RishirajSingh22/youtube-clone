
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ title, channel_name, views, time_ago, thumbnail_url, video_url }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/watch', { state: { video_url, title, channel_name, views, time_ago } });
  };
 
  return (
    <div className="videoCard" onClick={handleClick}>
      <img src={thumbnail_url} alt={title} />
      <div className="videoCard__info">
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel_name}</p>
          <p>{views} • {time_ago}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
