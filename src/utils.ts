import { Band, Case, Collection, ProductDetails, Size } from "..";
import { DATA_STORE, DEFAULTS } from "./constants";

export const getData = (
  selectedCollection: Collection,
  selectedSize: Size,
  selectedCase: Case,
  selectedBand: Band
): ProductDetails | undefined => {
  let collection = selectedCollection ?? "BASE";
  let size = selectedSize ?? "46";
  let Case = selectedCase ?? "Aluminium";
  let band = selectedBand ?? "Solo_Loop";
  if (!DATA_STORE[collection]) {
    collection = "BASE";
  }
  if (!DATA_STORE[collection][size]) {
    size = DEFAULTS[collection].SIZE;
  }
  if (!DATA_STORE[collection][size]?.[Case]) {
    Case = DEFAULTS[collection].CASE;
  }
  if (!DATA_STORE[collection][size]?.[Case]?.[band]) {
    band = DEFAULTS[collection].BAND;
  }

  if (DATA_STORE[collection][size]?.[Case]?.[band]) {
    return DATA_STORE[collection][size]?.[Case]?.[band];
  } else {
    return DATA_STORE["BASE"]["46"]?.["Aluminium"]?.["Solo_Loop"];
  }
};
