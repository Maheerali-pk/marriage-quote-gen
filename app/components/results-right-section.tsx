"use client";
import { FunctionComponent } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import {
  generateResultItem,
  getEnabledEventGroups,
  getTotalPrice,
} from "../helpers/utils";
import { allEventGroups } from "../helpers/data";
import EventGroupWrapper from "./event-group-wrapper";

interface ResultsRightSectionProps {}

// You can tweak these values to control how big each dash is
const DASH_LENGTH_PX = 48;
const DASH_GAP_PX = 24;

const ResultsRightSection: FunctionComponent<ResultsRightSectionProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const enabledEventGroups = getEnabledEventGroups(state);
  const filteredEventGroups = allEventGroups.filter(
    (group) =>
      enabledEventGroups.find((item) => item.evnetGroupId === group.id)?.enabled
  );
  return (
    <div className="flex flex-col gap-8 text-white w-full border-primary/75 border-2 p-8 bg-black/30 rounded-4xl">
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <div className="flex text-6xl">Oferta Përmban:</div>
        <div className="text-lg">
          * Kliko mbi për ta larguar ndonjë sherbim apo produkt *
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {filteredEventGroups.map((group) => (
          <EventGroupWrapper key={group.id} data={group} />
        ))}
      </div>
      <div
        className="w-full h-[3px] mt-4"
        style={{
          backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.7) 0, rgba(255,255,255,0.7) ${DASH_LENGTH_PX}px, transparent ${DASH_LENGTH_PX}px, transparent ${
            DASH_LENGTH_PX + DASH_GAP_PX
          }px)`,
        }}
      />
      <div className="flex  gap-2 items-center justify-end w-full text-white text-7xl">
        Total: {getTotalPrice(state)}
      </div>
    </div>
  );
};

export default ResultsRightSection;
