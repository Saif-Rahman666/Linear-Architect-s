import React from "react";

const FurnitureFlow = () => {
  const youtubeVideoId = "NoWyNgAQe34"; // Replace this with your YouTube video ID

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        overflow: "hidden",
        paddingTop: "100px",
      }}
    >
      <iframe
        className="sm:hidden bg-center bg-no-repeat bg-cover"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          border: "none",
        }}
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FurnitureFlow;
