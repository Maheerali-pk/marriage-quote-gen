"use client";
import { FunctionComponent } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { generateResultItem, getEnabledEventGroups } from "../helpers/utils";
import { allEventGroups } from "../helpers/data";
import EventGroupWrapper from "./event-group-wrapper";

interface ResultsRightSectionProps {}

const ResultsRightSection: FunctionComponent<ResultsRightSectionProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const enabledEventGroups = getEnabledEventGroups(state);
  const filteredEventGroups = allEventGroups.filter(
    (group) =>
      enabledEventGroups.find((item) => item.evnetGroupId === group.id)?.enabled
  );
  return (
    <div className="flex flex-col gap-8 text-white w-full">
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <div className="flex text-6xl">Oferta Përmban:</div>
        <div className="">
          * Kliko mbi për ta larguar ndonjë sherbim apo produkt *
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {filteredEventGroups.map((group) => (
          <EventGroupWrapper key={group.id} data={group} />
        ))}
      </div>
    </div>
  );
};

export default ResultsRightSection;
