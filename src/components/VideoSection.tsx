import React from "react";
import videoFile from "../assets/Mobile Assets/UA_Theme_1_MB.mp4";

const VideoSection = () => {
  return (
    <section
      className="w-full py-12 px-4 flex flex-col items-center"
      style={{ backgroundColor: "#F0F0FA", height: "700px", marginTop: "80px" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
        See WBWR In Action
      </h2>

      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-xl">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;