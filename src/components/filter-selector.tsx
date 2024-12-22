import { useFilterStateContext } from "@/context/FilterStateProvider";
import React from "react";
import { Filter } from "../..";
import { FILTER_ICON } from "@/constants";

interface FilterSelectorProps {
  type: Filter;
  label: string;
  selectedFilter: string;
  options: string[];
  optionLabel: Record<string, string>;
  onFilterChange: (option: string) => void;
}

const FilterSelector: React.FC<FilterSelectorProps> = ({
  type,
  label,
  selectedFilter,
  options,
  optionLabel,
  onFilterChange,
}) => {
  const { openFilter, setOpenFilter } = useFilterStateContext();

  return (
    <div
      onClick={() => setOpenFilter(type)}
      role="button"
      className="flex gap-1 px-6 py-3 bg-[#e8e8ed] text-[#1d1d1f] text-lg font-normal rounded-full border-0 cursor-pointer items-center"
    >
      {FILTER_ICON[type]}
      {openFilter !== type ? (
        <button>{label}</button>
      ) : (
        <ul className="flex gap-3 open-animation">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => onFilterChange(option)}
              className={`${option === selectedFilter ? "font-bold" : ""}`}
            >
              {optionLabel[option]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelector;
