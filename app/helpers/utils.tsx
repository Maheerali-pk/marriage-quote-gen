import { IGlobalState } from "../contexts/GlobalContext";

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
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
