"use client";
interface VideoItemProps {}

const VideoItem: React.FC<VideoItemProps> = () => {
  return (
    <div className="w-full relative">
      <img
        src="/images/video.png"
        className="w-full h-auto  top-0 left-0 brightness-50"
      ></img>
      <img
        className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/images/play-icon.png"
      ></img>
    </div>
  );
};

export default VideoItem;
