import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div>
        <iframe
          src={VideoSrc}
          style={{ height: "380px", width: "100%" }}
          className="w-100"
          title="Video Player"
        ></iframe>
      </div>
      <div className="border p-2"></div>
      <h4>{video.snippet.title} </h4>
      <p>{video.snippet.description} </p>
    </>
  );
};

export default VideoDetails;
