import { BAND, CASE, COLLECTION, SIZE } from "@/constants";

type Collection = keyof typeof COLLECTION;

type Size = keyof typeof SIZE;

type Case = keyof typeof CASE;

type Band = keyof typeof BAND;

type Filter = "collection" | "size" | "case" | "band";

interface ProductDetails {
  CASE_IMG: string;
  BAND_IMG: string;
  PRICE: string;
  LABEL: string;
  SIZE: Size;
  CASE: Case;
  BAND: Band;
  COLLECTION: Collection;
}

type CollectionSizeCaseBandData = Partial<
  Record<Size, Partial<Record<Case, Partial<Record<Band, ProductDetails>>>>>
>;

export type DataStore = Record<Collection, CollectionSizeCaseBandData>;
