import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos, onVideoSelect }) => {
  const Item = videos.map((video) => (
    <VideoItems
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return <div className="ui relaxed divided list">{Item}</div>;
};

export default VideoList;
