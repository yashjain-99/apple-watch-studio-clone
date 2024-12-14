import { DATA_STORE } from "./constants";

export const getData = (
  selectedCollection,
  selectedSize,
  selectedCase,
  selectedBand
) => {
  if (selectedCollection && selectedSize && selectedCase && selectedBand) {
    return DATA_STORE[selectedCollection][selectedSize][selectedCase][
      selectedBand
    ];
  } else {
    if (DATA_STORE["BASE"]["46"]) {
      if (DATA_STORE["BASE"]["46"]["Aluminium"]) {
        return DATA_STORE["BASE"]["46"]["Aluminium"]["Solo_Loop"];
      }
    }
  }
};
