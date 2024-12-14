"use client";

import { BAND, CASE, COLLECTION, SIZE } from "@/constants";
import { createContext, ReactNode, useContext, useReducer } from "react";

type CollectionType = keyof typeof COLLECTION;
type SizeType = keyof typeof SIZE;
type CaseType = keyof typeof CASE;
type BandType = keyof typeof BAND;

interface State {
  selectedCollection: CollectionType | undefined;
  selectedSize: SizeType | undefined;
  selectedCase: CaseType | undefined;
  selectedBand: BandType | undefined;
}

type Action =
  | { type: "SET_COLLECTION"; payload: CollectionType }
  | { type: "SET_SIZE"; payload: SizeType }
  | { type: "SET_CASE"; payload: CaseType }
  | { type: "SET_BAND"; payload: BandType };

const initialState: State = {
  selectedCollection: undefined,
  selectedSize: undefined,
  selectedCase: undefined,
  selectedBand: undefined,
};

const stateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_COLLECTION":
      return { ...state, selectedCollection: action.payload };
    case "SET_SIZE":
      return { ...state, selectedSize: action.payload };
    case "SET_CASE":
      return { ...state, selectedCase: action.payload };
    case "SET_BAND":
      return { ...state, selectedBand: action.payload };
    default:
      return state;
  }
};

const StateContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within an StateProvider");
  }
  return context;
};

export const setCollection = (
  dispatch: React.Dispatch<Action>,
  collection: CollectionType
) => {
  dispatch({ type: "SET_COLLECTION", payload: collection });
};

export const setSize = (dispatch: React.Dispatch<Action>, size: SizeType) => {
  dispatch({ type: "SET_SIZE", payload: size });
};

export const setCase = (
  dispatch: React.Dispatch<Action>,
  caseType: CaseType
) => {
  dispatch({ type: "SET_CASE", payload: caseType });
};

export const setBand = (dispatch: React.Dispatch<Action>, band: BandType) => {
  dispatch({ type: "SET_BAND", payload: band });
};

export default StateProvider;
