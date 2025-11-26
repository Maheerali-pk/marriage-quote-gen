import { IGlobalState } from "../contexts/GlobalContext";
import { allEventGroups, allEventItems } from "./data";

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getTotalPrice = (state: IGlobalState) => {
  const enabledEventGroups = getEnabledEventGroups(state);
  const filteredEventGroups = allEventGroups.filter(
    (group) =>
      enabledEventGroups.find((item) => item.evnetGroupId === group.id)?.enabled
  );
  return filteredEventGroups.reduce((acc, group) => {
    const mySubItems = allEventItems.filter((item) =>
      item.availableForEvents.includes(group.id)
    );
    const checkedSubItems = mySubItems.filter((item) =>
      state.selections
        ?.find((selection) => selection.eventGroupId === group.id)
        ?.selectedItemIds.includes(item.id)
    );
    return (
      acc +
      checkedSubItems.reduce((acc, item) => acc + item.price, 0) *
        (1 - group.discountPercentage / 100)
    );
  }, 0);
};

export const getEnabledEventGroups = (state: IGlobalState) => {
  const res = [
    { evnetGroupId: "0", enabled: false },

    { evnetGroupId: "1", enabled: false },
    { evnetGroupId: "2", enabled: true },
    { evnetGroupId: "3", enabled: false },
  ];
  if (state.brideTradition) {
    res.find((item) => item.evnetGroupId === "0")!.enabled = true;
  }
  if (state.buildingType === "church" || state.buildingType === "mosque") {
    res.find((item) => item.evnetGroupId === "1")!.enabled = true;
  }

  if (state.venue) {
    res.find((item) => item.evnetGroupId === "3")!.enabled = true;
  }
  return res;
};
export const generateResultItem = (state: IGlobalState) => {
  const traditionContent = (
    <>
      , të cilët do të kenë edhe proceduren e marrjës së nusës nga Lokacioni i
      dhenderrit <b>{state.groomLocation}</b> deri tek lokacioni i nuses në{" "}
      <b>{state.brideLocation}</b>
    </>
  );
  const venueContent = (
    <>
      në <b>{state.venue}</b>
    </>
  );
  return (
    <div className="text-white">
      Oferta e gjeneruar për qiftin{" "}
      <b>
        {state.groomName} & {state.brideName}
      </b>
      , të cilët do të martohën me datën <b>{formatDate(state.eventDate)}</b>,
      {state.venue ? venueContent : null}
      {state.brideTradition ? traditionContent : null}
    </div>
  );
};
