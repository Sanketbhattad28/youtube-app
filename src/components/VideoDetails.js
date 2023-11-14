import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <h1 style={{ alignItems: "center" }}>Loading...</h1>;
  }
  const location = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <h1>Selected Video</h1>
      <div className="ui embed">
        <iframe src={location} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
