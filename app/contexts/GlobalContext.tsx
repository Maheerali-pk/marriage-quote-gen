"use client";
import { createCustomContext } from "../helpers/CreateCustomContext";

interface IGlobalState {
  brideName: string;
  groomName: string;
  eventType: string;
  eventDate: string;
  isWeddingVenueDecided?: boolean;
  brideTradition?: boolean;
  venue?: string;
}
const initialState: IGlobalState = {
  brideName: "",
  groomName: "",
  eventType: "",
  eventDate: "",
};

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
};

const { Context, Provider, useContextHook } = createCustomContext<
  IGlobalState,
  typeof functions
>({ functions, initialState });

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
export const GlobalContext = Context;
