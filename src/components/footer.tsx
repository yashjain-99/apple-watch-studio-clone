import React from "react";
import FilterSelector from "./filter-selector";
import { useStateContext } from "@/context/StateProvider";
import { BAND, BANDS, CASE, CASES, SIZE, SIZES } from "@/constants";

const Footer = () => {
  const { state } = useStateContext();
  return (
    <footer className="absolute bottom-11 box-border overflow-hidden pb-1 text-center whitespace-nowrap w-full">
      <div className="flex gap-3 justify-center items-center relative min-h-[60px] w-full">
        <FilterSelector
          label="Size"
          optionLabel={SIZE}
          options={SIZES[state.selectedCollection!]}
          selectedFilter={state.selectedSize!}
          type="size"
        />
        <FilterSelector
          label="Case"
          optionLabel={CASE}
          options={CASES[state.selectedCollection!]}
          selectedFilter={state.selectedCase!}
          type="case"
        />
        <FilterSelector
          label="Band"
          optionLabel={BAND}
          options={BANDS[state.selectedCollection!]}
          selectedFilter={state.selectedBand!}
          type="band"
        />
      </div>
    </footer>
  );
};

export default Footer;
