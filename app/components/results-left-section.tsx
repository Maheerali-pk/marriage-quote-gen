"use client";
import { FunctionComponent } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { generateResultItem } from "../helpers/utils";

interface ResultsRightSectionProps {}

const ResultsLeftSection: FunctionComponent<ResultsRightSectionProps> = () => {
  const [state, dispatch] = useGlobalContext();
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold text-white">
        Oferta speciale për
      </div>
      <div className="text-primary text-8xl text-shadow-lg text-shadow-primary">
        {state.brideName} & {state.groomName}
      </div>
      {generateResultItem(state)}
      <div className="text-white ">OFFER ID: #34403</div>
    </div>
  );
};

export default ResultsLeftSection;
