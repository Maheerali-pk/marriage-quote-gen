"use client";
interface VideoItemProps {}

const VideoItem: React.FC<VideoItemProps> = () => {
  return (
    <div className="w-full relative">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/z4zxdsFBCbI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoItem;
