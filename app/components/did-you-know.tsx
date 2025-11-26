import classNames from "classnames";

interface DidYouKnowProps {
  title: string;
  description: string;
  large?: boolean;
}

const DidYouKnow: React.FC<DidYouKnowProps> = ({
  title,
  description,
  large = false,
}) => {
  return (
    <div className="border rounded-4xl border-[rgba(212,170,0,1)] py-8 flex flex-col items-center justify-center">
      <div
        className={classNames(
          "flex flex-col items-center gap-4 justify-center w-2/3",
          { "w-full px-6": large }
        )}
      >
        <div className="text-white font-bold">{title}</div>
        <div className="text-white text-center ">{description}</div>
      </div>
    </div>
  );
};

export default DidYouKnow;
