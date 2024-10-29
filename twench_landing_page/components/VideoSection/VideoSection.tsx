"use client";
import React, { useRef } from "react";
import "./VideoSection.css";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="VideoSection">
      <div className="Preview">
        <video
          ref={videoRef}
          src="/videos/v2.mp4"
          controls
          onClick={handleVideoClick}
        ></video>
      </div>
    </div>
  );
};

export default VideoSection;
