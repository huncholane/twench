import React from "react";
import "./VideoSection.css";

const VideoSection: React.FC = () => {
  return (
    <div className="VideoSection relative w-full">
      <div className="Preview absolute left-1/2 transform -translate-x-1/2 -rotate-[20] w-96 h-32">
        <div className="PlayButton absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex justify-center items-center">
          <div className="Triangle w-6 h-6 border-t-2 border-r-2 border-black transform rotate-45"></div>
        </div>
      </div>
      <video className="hidden" controls>
        <source src="/videos/v2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
