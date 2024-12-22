"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  ReactElement,
} from "react";
import { Filter } from "../..";

// Define the shape of the context
interface FilterStateContextType {
  openFilter: Filter | undefined;
  setOpenFilter: (filter: Filter | undefined) => void;
}

const FilterStateContext = createContext<FilterStateContextType | undefined>(
  undefined
);

const FilterStateProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [openFilter, setOpenFilter] = useState<Filter | undefined>(undefined);

  return (
    <FilterStateContext.Provider value={{ openFilter, setOpenFilter }}>
      {children}
    </FilterStateContext.Provider>
  );
};

export const useFilterStateContext = (): FilterStateContextType => {
  const context = useContext(FilterStateContext);

  if (!context) {
    throw new Error(
      "useFilterStateContext must be used within a FilterStateProvider"
    );
  }

  return context;
};

export default FilterStateProvider;
