// import React from 'react';
// import VideoCard from './VideoCard';
// import './VideoGrid.css';
// import jsdata from "../video.json";

// function VideoGrid({ searchQuery }) {
//   // Filter videos based on the search query
//   const filteredVideos = jsdata.filter(video =>
//     video.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="videoGrid">
//       {filteredVideos.map((video, index) => (
//         <VideoCard
//           key={index}
//           title={video.title}
//           channel_name={video.channel_name}
//           views={video.views}
//           time_ago={video.time_ago}
//           thumbnail_url={video.thumbnail_url}
//         />
//       ))}
//     </div>
//   );
// }

// export default VideoGrid;
// ----
import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';
import jsdata from "../video.json";

function VideoGrid({ searchQuery = '' }) {
  // Filter videos based on the search query
  const filteredVideos = jsdata.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="videoGrid">
      {filteredVideos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          channel_name={video.channel_name}
          views={video.views}
          time_ago={video.time_ago}
          thumbnail_url={video.thumbnail_url}
          video_url={video.video_url} // Pass the video_url
        />
      ))}
    </div>
  );
}

export default VideoGrid;
