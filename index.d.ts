import { BAND, CASE, COLLECTION, SIZE } from "@/constants";

type Collection = keyof typeof COLLECTION;

type Size = keyof typeof SIZE;

type Case = keyof typeof CASE;

type Band = keyof typeof BAND;

type Filter = "collection" | "size" | "case" | "band";
