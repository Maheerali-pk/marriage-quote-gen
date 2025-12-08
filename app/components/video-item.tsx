"use client";
import { useState, useRef, useEffect } from "react";

interface VideoItemProps {}

const VideoItem: React.FC<VideoItemProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setShouldLoadVideo(true);
    setIsPlaying(true);
    // Use setTimeout to ensure video element is rendered before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    }, 0);
  };

  // Pause video when component unmounts or page changes
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* Placeholder thumbnail - hidden when playing */}
      {!isPlaying && (
        <>
          <img
            src="/images/video.png"
            className="w-full h-auto top-0 left-0 brightness-50"
            alt="Video thumbnail"
            loading="lazy"
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
      {/* Video element - only rendered when needed (lazy loading) */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          src="/videos/trailer.mp4"
          className={`w-full h-auto ${isPlaying ? "block" : "hidden"}`}
          controls
          playsInline
          preload="none"
          onEnded={() => setIsPlaying(false)}
          onPause={() => {
            // Optional: reset to thumbnail when paused if needed
          }}
        />
      )}
    </div>
  );
};

export default VideoItem;
