import { BANDS, CASES, SIZES } from "@/constants";
import { useFilterStateContext } from "@/context/FilterStateProvider";
import { useStateContext } from "@/context/StateProvider";
import { getData } from "@/utils";

const useCarouselData = () => {
  const { openFilter } = useFilterStateContext();
  const { state } = useStateContext();

  if (openFilter && openFilter !== "collection") {
    if (openFilter === "size") {
      let selectedIndex = 0;
      const data = SIZES[state.selectedCollection!].map((size, index) => {
        if (size == state.selectedSize) selectedIndex = index;
        return {
          id: index,
          ...getData(
            state.selectedCollection,
            size,
            state.selectedCase,
            state.selectedBand
          ),
        };
      });
      return { data, selectedIndex };
    }

    if (openFilter === "case") {
      let selectedIndex = 0;
      const data = CASES[state.selectedCollection!].map((value, index) => {
        if (value == state.selectedCase) selectedIndex = index;
        return {
          id: index,
          ...getData(
            state.selectedCollection,
            state.selectedSize,
            value,
            state.selectedBand
          ),
        };
      });
      return { data, selectedIndex };
    }

    if (openFilter === "band") {
      let selectedIndex = 0;
      const data = BANDS[state.selectedCollection!].map((value, index) => {
        if (value == state.selectedBand) selectedIndex = index;
        return {
          id: index,
          ...getData(
            state.selectedCollection,
            state.selectedSize,
            state.selectedCase,
            value
          ),
        };
      });
      return { data, selectedIndex };
    }
  } else {
    const data = [
      {
        id: 1,
        ...getData(
          state.selectedCollection,
          state.selectedSize,
          state.selectedCase,
          state.selectedBand
        ),
      },
    ];
    return { data, selectedIndex: 0 };
  }
};

export default useCarouselData;
