"use client";
import { createCustomContext } from "../helpers/CreateCustomContext";
import { allEventItems } from "../helpers/data";

export interface IEventItemSelection {
  eventGroupId: string;
  selectedItemIds: string[];
}
export interface IGlobalState {
  brideName: string;
  groomName: string;
  eventType: string;
  eventDate: string;
  isWeddingVenueDecided?: boolean;
  brideTradition?: boolean;
  venue?: string;
  brideLocation?: string;
  groomLocation?: string;
  buildingType?: "church" | "mosque" | "none";
  mosqueLocation?: string;
  churchLocation?: string;
  memberCount?: string;
  phoneNumber?: string;
  email?: string;
  selections?: IEventItemSelection[];
}
const initialState: IGlobalState = {
  brideName: "",
  groomName: "",
  eventType: "",
  eventDate: "",
  selections: [
    { eventGroupId: "0", selectedItemIds: [] },
    { eventGroupId: "1", selectedItemIds: [] },
    { eventGroupId: "2", selectedItemIds: [] },
    { eventGroupId: "3", selectedItemIds: [] },
  ],
};
function toggleEventGroupSelection(
  state: IGlobalState,
  data: { eventGroupId: string }
): IGlobalState {
  const { eventGroupId } = data;
  const newSelections: IEventItemSelection[] = JSON.parse(
    JSON.stringify(state.selections)
  );
  const myGroup = newSelections?.find(
    (selection) => selection.eventGroupId === eventGroupId
  );
  const myItems = allEventItems.filter((item) =>
    item.availableForEvents.includes(eventGroupId)
  );
  const allItemsSelected = myGroup?.selectedItemIds.length === myItems.length;
  if (allItemsSelected) {
    myGroup!.selectedItemIds = [];
  } else {
    myGroup!.selectedItemIds = myItems.map((item) => item.id);
  }
  console.log(newSelections, "Toggle Event Group Selection");
  return {
    ...state,
    selections: newSelections,
  };
}

function toggleEventItemSelection(
  state: IGlobalState,
  data: { eventGroupId: string; itemId: string }
): IGlobalState {
  const { eventGroupId, itemId } = data;
  const newSelections: IEventItemSelection[] = JSON.parse(
    JSON.stringify(state.selections)
  );
  const myGroup = newSelections?.find(
    (selection) => selection.eventGroupId === eventGroupId
  );
  if (myGroup?.selectedItemIds.includes(itemId)) {
    myGroup.selectedItemIds = myGroup.selectedItemIds.filter(
      (id) => id !== itemId
    );
  } else {
    myGroup?.selectedItemIds.push(itemId);
  }
  return {
    ...state,
    selections: newSelections,
  };
}
function setState(
  state: IGlobalState,
  action: Partial<IGlobalState>
): IGlobalState {
  return {
    ...state,
    ...action,
  };
}

const functions = {
  setState,
  toggleEventItemSelection,
  toggleEventGroupSelection,
};

const { Context, Provider, useContextHook } = createCustomContext<
  IGlobalState,
  typeof functions
>({ functions, initialState });

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
export const GlobalContext = Context;
