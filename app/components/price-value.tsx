import { FunctionComponent } from "react";

interface PriceValueProps {
  value: number;
  discountedValue?: number;
}

const PriceValue: FunctionComponent<PriceValueProps> = ({
  value,
  discountedValue,
}) => {
  if (!discountedValue || discountedValue === value) {
    return <div className="text-white text-7xl">{value}€</div>;
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-white text-4xl relative">
        <div>{value}€</div>
        <div className="bg-red-500 h-[3px] w-full -rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {discountedValue && (
        <div className="text-white text-7xl">{discountedValue}€</div>
      )}
    </div>
  );
};

export default PriceValue;
