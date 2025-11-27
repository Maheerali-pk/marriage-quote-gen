"use client";
import { createCustomContext } from "../helpers/CreateCustomContext";
import { allEventItems } from "../helpers/data";

export interface ISelectedItem {
  itemId: string;
  count: number;
}

export interface IEventItemSelection {
  eventGroupId: string;
  selectedItems: ISelectedItem[];
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
    { eventGroupId: "0", selectedItems: [] },
    { eventGroupId: "1", selectedItems: [] },
    { eventGroupId: "2", selectedItems: [] },
    { eventGroupId: "3", selectedItems: [] },
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
  const allItemsSelected = myGroup?.selectedItems.length === myItems.length;
  if (allItemsSelected) {
    myGroup!.selectedItems = [];
  } else {
    myGroup!.selectedItems = myItems.map((item) => ({
      itemId: item.id,
      count: 1,
    }));
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
  const existingItem = myGroup?.selectedItems.find(
    (item) => item.itemId === itemId
  );
  if (existingItem) {
    myGroup!.selectedItems = myGroup!.selectedItems.filter(
      (item) => item.itemId !== itemId
    );
  } else {
    myGroup?.selectedItems.push({ itemId, count: 1 });
  }
  return {
    ...state,
    selections: newSelections,
  };
}

function updateItemCount(
  state: IGlobalState,
  data: { eventGroupId: string; itemId: string; count: number }
): IGlobalState {
  const { eventGroupId, itemId, count } = data;
  const newSelections: IEventItemSelection[] = JSON.parse(
    JSON.stringify(state.selections)
  );
  const myGroup = newSelections?.find(
    (selection) => selection.eventGroupId === eventGroupId
  );
  const existingItem = myGroup?.selectedItems.find(
    (item) => item.itemId === itemId
  );
  if (existingItem && count > 0) {
    existingItem.count = count;
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
  updateItemCount,
};

const { Context, Provider, useContextHook } = createCustomContext<
  IGlobalState,
  typeof functions
>({ functions, initialState });

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
export const GlobalContext = Context;
