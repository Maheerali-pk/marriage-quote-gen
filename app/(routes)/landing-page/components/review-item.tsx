"use client";
import { useRouter } from "next/navigation";

interface ReviewItemProps {
  image: string;
  date: string;
  groomName: string;
  brideName: string;
  location: string;
  review: string[];
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  image,
  date,
  location,
  review,
  groomName,
  brideName,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full max-w-[600px] gap-3 sm:gap-4">
      <img src={image} alt="review" className="w-full h-full object-cover" />
      <div className="flex items-center gap-2">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <img
              key={idx}
              src="/images/lp/star.png"
              alt="star"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
          ))}
      </div>
      <div className="flex flex-col gap-1 sm:gap-2">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl text-black">
          {groomName} & {brideName}
        </div>
        <div className="text-black text-base sm:text-lg">
          {date} | {location}
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3">
        {review.map((item, index) => (
          <div key={index} className="text-black text-base sm:text-lg">
            {item}
          </div>
        ))}
      </div>
      <button
        className="btn-primary w-full sm:w-fit !rounded-full !text-base md:text-inherit "
        onClick={() => router.push("/initial")}
      >
        REZERVO DASMË TË TILLË
      </button>
    </div>
  );
};

export default ReviewItem;
