import { ReactNode } from "react";
import { Band, Case, Collection, Filter, Size } from "..";

export const COLLECTION = Object.freeze({
  BASE: "Apple Watch Series 10",
  HERMES: "Apple Watch Hermès Series 10",
  SE: "Apple Watch SE",
});

export const COLLECTIONS = Object.freeze(
  Object.keys(COLLECTION) // Now using the keys from COLLECTION as the list
) as Collection[];

export const SIZE = Object.freeze({
  "40": "40mm",
  "42": "42mm",
  "44": "44mm",
  "46": "46mm",
});

export const CASE = Object.freeze({
  Aluminium: "Aluminium",
  Titanium: "Titanium",
});

export const BAND = Object.freeze({
  Stainless_Steel: "Stainless Steel",
  Sport_Loop: "Sport Loop",
  Sport_Band: "Sport Band",
  Fine_Woven: "Fine Woven",
  Braided_Solo_Loop: "Braided Solo Loop",
  Solo_Loop: "Solo Loop",
  Nike_Sport_Loop: "Nike Sport Loop",
  Nike_Sport_Band: "Nike Sport Band",
  Hermes_Toile_H: "Hermès Toile H",
  Hermes_Torsade: "Hermès Torsade",
  Hermes_Kilim: "Hermès Kilim",
  Hermes_Grand_H: "Hermès Grand H",
});

export const SIZES: Record<Collection, Size[]> = Object.freeze({
  BASE: ["42", "46"],
  HERMES: ["42", "46"],
  SE: ["40", "44"],
});

export const CASES: Record<Collection, Case[]> = Object.freeze({
  BASE: ["Aluminium", "Titanium"],
  HERMES: ["Titanium"],
  SE: ["Aluminium"],
});

export const BANDS: Record<Collection, Band[]> = Object.freeze({
  BASE: [
    "Braided_Solo_Loop",
    "Fine_Woven",
    "Nike_Sport_Band",
    "Nike_Sport_Loop",
    "Solo_Loop",
    "Sport_Band",
    "Sport_Loop",
    "Stainless_Steel",
  ],
  HERMES: [
    "Hermes_Toile_H",
    "Hermes_Torsade",
    "Hermes_Kilim",
    "Hermes_Grand_H",
  ],
  SE: [
    "Stainless_Steel",
    "Sport_Loop",
    "Sport_Band",
    "Fine_Woven",
    "Braided_Solo_Loop",
    "Solo_Loop",
    "Nike_Sport_Loop",
    "Nike_Sport_Band",
  ],
});

interface DefaultConfig {
  SIZE: Size;
  CASE: Case;
  BAND: Band;
}

export const DEFAULTS: Record<Collection, DefaultConfig> = {
  BASE: {
    SIZE: "46",
    CASE: "Aluminium",
    BAND: "Solo_Loop",
  },
  HERMES: {
    SIZE: "46",
    CASE: "Titanium",
    BAND: "Hermes_Grand_H",
  },
  SE: {
    SIZE: "44",
    CASE: "Aluminium",
    BAND: "Solo_Loop",
  },
};

interface ProductDetails {
  CASE_IMG: string;
  BAND_IMG: string;
  PRICE: string;
  LABEL?: string;
  SIZE: Size;
  CASE: Case;
  BAND: Band;
}

type CollectionSizeCaseBandData = Partial<
  Record<Size, Partial<Record<Case, Partial<Record<Band, ProductDetails>>>>>
>;

export type DataStore = Record<Collection, CollectionSizeCaseBandData>;

export const DATA_STORE: DataStore = {
  BASE: {
    "42": {
      Aluminium: {
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY7N3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=V0p1YnJBTzdtN2g0SkpiRThzUmdWenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$399",
          LABEL: "42mm Jet Black Aluminum Case with Black Solo Loop",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aElTUnhScisyVTE2blhobVRJMDBtanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$449",
          LABEL: "42mm Jet Black Aluminum Case with Black Magnetic Link",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJA3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NG5FUG1JK3JIMzJUSFFrckFvMk5NNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUDljbk54eS84M0hDd1l2NDAzRVh2RHM",
          PRICE: "$399",
          LABEL: "42mm Jet Black Aluminum Case with Black/Blue Nike Sport Loop",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Loop",
        },
        Braided_Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL03_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WVFGTUlRWkZ4a1dJanBDbXJZMDUyb1dnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
          PRICE: "$449",
          LABEL: "42mm Jet Black Aluminum Case with Denim Braided Solo Loop",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Braided_Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL93ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dUNHTVAyQVdwSGwzeGJZRHFKdjhoVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$399",
          LABEL: "42mm Jet Black Aluminum Case with Lake Green Sport Band",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL03_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WVFGTUlRWkZ4a1dJanBDbXJZMDUyb1dnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
          PRICE: "$399",
          LABEL: "42mm Jet Black Aluminum Case with Ultramarine Sport Loop",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMM3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RUVrR0pYQnFkVXB2VXdybU1jWHBDNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
          PRICE: "$449",
          LABEL: "42mm Jet Black Aluminum Case with Natural Milanese Loop",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Stainless_Steel",
        },
      },
      Titanium: {
        Braided_Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Nike_Sport_Loop",
        },
        Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Stainless_Steel",
        },
      },
    },
    "46": {
      Aluminium: {
        Braided_Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$429",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Loop",
        },
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "From $429",
          LABEL: "46mm Jet Black Aluminum Case with Black Solo Loop",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Stainless_Steel",
        },
      },
      Titanium: {
        Braided_Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Nike_Sport_Loop",
        },
        Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Stainless_Steel",
        },
      },
    },
  },
  HERMES: {
    "42": {
      Titanium: {
        Hermes_Toile_H: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Toile_H",
        },
        Hermes_Torsade: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Torsade",
        },
        Hermes_Kilim: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Kilim",
        },
        Hermes_Grand_H: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Grand_H",
        },
      },
    },
    "46": {
      Titanium: {
        Hermes_Toile_H: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Hermes_Toile_H",
        },
        Hermes_Torsade: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Hermes_Torsade",
        },
        Hermes_Kilim: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Hermes_Kilim",
        },
        Hermes_Grand_H: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
          PRICE: "$1,949.00",
          LABEL: "APPLE WATCH HERMÈS SERIES 10",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Hermes_Grand_H",
        },
      },
    },
  },
  SE: {
    "40": {
      Aluminium: {
        Braided_Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Loop",
        },
        Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Stainless_Steel",
        },
      },
    },
    "44": {
      Aluminium: {
        Braided_Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Loop",
        },
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $279",
          LABEL: "44mm Silver Aluminum Case with Star Fruit Solo Loop",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Stainless_Steel",
        },
      },
    },
  },
};

export const FILTER_ICON: Partial<Record<Filter, ReactNode>> = {
  size: (
    <svg
      height="25"
      viewBox="0 0 19 25"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 0h19v25h-19z" fill="none"></path>
      <path
        d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
        fill="#1d1d1f"
      ></path>
    </svg>
  ),
  case: (
    <svg
      height="25"
      viewBox="0 0 17 25"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 0h17v25h-17z" fill="none"></path>
      <path
        d="m16 8.2017c-.1665-.1801-.385-.2703-.6553-.2703h-.3447v-.0225c0-2.2253-1.804-4.0293-4.0293-4.0293h-6.9414c-2.2253.0001-4.0293 1.804-4.0293 4.0294v8.9414c0 2.2253 1.804 4.0293 4.0293 4.0293h6.9414c2.2253 0 4.0293-1.804 4.0293-4.0293v-5.1904h.3447c.2703 0 .4888-.0923.6553-.277.1667-.1844.25-.4254.25-.7227v-1.7427c0-.2972-.0833-.5356-.25-.7159zm-2 8.6487c0 1.6704-1.3589 3.0293-3.0293 3.0293h-6.9414c-1.6704 0-3.0293-1.3589-3.0293-3.0293v-8.9414c0-1.6704 1.3589-3.0293 3.0293-3.0293h6.9414c1.6704 0 3.0293 1.3589 3.0293 3.0293z"
        fill="#1d1d1f"
      ></path>
    </svg>
  ),
  band: (
    <svg
      height="25"
      viewBox="0 0 10 25"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 0h10v25h-10z" fill="none"></path>
      <path
        d="m9.5 22.5a.5.5 0 0 1 -.5.5h-8a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-6.2216a4.5231 4.5231 0 0 0 1 .9448v5.2768a1.4779 1.4779 0 0 1 -.0813.485h5.1627a1.4758 1.4758 0 0 1 -.0814-.485v-5.2768a4.5209 4.5209 0 0 0 1-.9448v6.2216a.4851.4851 0 0 0 .4851.485h.0149a.5.5 0 0 1 .5.5zm-1.9194-19.5h-5.1621a1.4732 1.4732 0 0 1 .0815.485v9.015a2.5 2.5 0 0 0 5 0v-9.015a1.4873 1.4873 0 0 1 .0806-.485m1.4194-1a.5.5 0 0 1 .5.5.5.5 0 0 1 -.5.5h-.015a.485.485 0 0 0 -.485.485v9.015a3.5 3.5 0 0 1 -3.5 3.5 3.5 3.5 0 0 1 -3.5-3.5v-9.015a.485.485 0 0 0 -.485-.485h-.015a.5.5 0 0 1 0-1zm-3.2179 10.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75zm0-2.5a.75.75 0 1 0 -.75.75.75.75 0 0 0 .75-.75z"
        fill="#1d1d1f"
      ></path>
    </svg>
  ),
};
