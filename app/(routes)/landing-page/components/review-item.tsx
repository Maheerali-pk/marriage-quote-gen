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
    <div className="flex flex-col w-[600px] gap-4">
      <img src={image} alt="review" className="w-full h-full object-cover" />
      <div className="flex items-center gap-2">
        {Array(5)
          .fill(0)
          .map((_) => (
            <img src="/images/lp/star.png" alt="star" className="w-4 h-4" />
          ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-3xl text-black">
          {groomName} & {brideName}
        </div>
        <div className="text-black text-lg">
          {date} | {location}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {review.map((item, index) => (
          <div key={index} className="text-black text-lg">
            {item}
          </div>
        ))}
      </div>
      <button
        className="btn-primary w-fit !rounded-full"
        onClick={() => router.push("/initial")}
      >
        REZERVO DASMË TË TILLË
      </button>
    </div>
  );
};

export default ReviewItem;
