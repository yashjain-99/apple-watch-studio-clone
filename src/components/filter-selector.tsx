import { useFilterStateContext } from "@/context/FilterStateProvider";
import React from "react";
import { Filter } from "../..";
import { FILTER_ICON } from "@/constants";
import { useSwiperInstanceContext } from "@/context/SwiperInstanceProvider";

interface FilterSelectorProps {
  type: Filter;
  label: string;
  selectedFilter: string;
  options: string[];
  optionLabel: Record<string, string>;
}

const FilterSelector: React.FC<FilterSelectorProps> = ({
  type,
  label,
  selectedFilter,
  options,
  optionLabel,
}) => {
  const { openFilter, setOpenFilter } = useFilterStateContext();
  const { swiperInstance } = useSwiperInstanceContext();

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
          {options.map((option, index) => (
            <li
              key={option}
              onClick={() => {
                swiperInstance?.slideTo(index);
              }}
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
