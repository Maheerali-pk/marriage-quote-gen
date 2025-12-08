"use client";
import { useState, useRef } from "react";

interface VideoItemProps {}

const VideoItem: React.FC<VideoItemProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="w-full relative">
      {/* Placeholder thumbnail - hidden when playing */}
      {!isPlaying && (
        <>
          <img
            src="/images/video.png"
            className="w-full h-auto top-0 left-0 brightness-50"
            alt="Video thumbnail"
          />
          <div
            className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
            onClick={handlePlay}
          >
            <img
              className="w-full h-full"
              src="/images/play-icon.png"
              alt="Play button"
            />
          </div>
        </>
      )}
      {/* Video element - shown when playing */}
      <video
        ref={videoRef}
        src="/videos/trailer.mp4"
        className={`w-full h-auto ${isPlaying ? "block" : "hidden"}`}
        controls
        playsInline
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default VideoItem;
