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
        Nike_Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-nike-globe-cargo-khaki-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekZjSlhzZUplZmtWaTdsandGcGw3cGs0QmNsU3Z4NGpJVjBzNk16cy9ZckFxODh3QlY0M1hFQUl5TWFQeldpbU1kaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHlmZzBLaCtKV0VucjRYdVVKVHlwaW51ZlJ0Q2kvZmJKMXc1NlJuNGtVZkEwZw",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU53ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=U2Z0M0w0NFNFRWExcno3cGs2dWtqanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC84dE50ZnF1eXhZRGJLdEo5ZlYxQkk",
          PRICE: "From $399",
          LABEL:
            "42mm Jet Black Aluminum Case with Volt Splash Nike Sport Band",
          SIZE: "42",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Band",
        },
      },
      Titanium: {
        Braided_Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzkyUkZrdDFobHFndTg2dVFhMU5ub1QzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXYR3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VzA3akFDWUZkZlQxM0lreTJET1FJanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
          PRICE: "$749.00",
          LABEL: "42mm Natural Titanium Case with Lake Green Braided Solo Loop",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Braided_Solo_Loop",
        },
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzkyUkZrdDFobHFndTg2dVFhMU5ub1QzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY7N3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=V0p1YnJBTzdtN2g0SkpiRThzUmdWenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$699.00",
          LABEL: "42mm Natural Titanium Case with Black Solo Loop",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Solo_Loop",
        },
        Nike_Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-nike-globe-volt-splash-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzZzOXZPOWtrM0VHeFNMQkMyMm9lMHQxbmVzTmtsSUR0Z2phZEc4N2NoK3J4V3ZVVEg4Q0dQMjkrdWdxM1h1U2pRQTc2ZnQ3b09SOE1vSFg4MGhpN0t4YlIwRlhSM2p5aW1wajBxM1pnY1RjZHp6dlRYdjhRMDFIWnBVRFpXNWlTMFFIcXZPMU1Vdmo1Rzc1QWRyN2FiQQ",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU53ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=U2Z0M0w0NFNFRWExcno3cGs2dWtqanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC84dE50ZnF1eXhZRGJLdEo5ZlYxQkk",
          PRICE: "$699.00",
          LABEL: "42mm Natural Titanium Case with Volt Splash Nike Sport Band",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-nike-globe-black-blue-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzZzOXZPOWtrM0VHeFNMQkMyMm9lMGo0SDV6YldPU2FwZVVTUHUvRmt4b05MOThYYThPaTFmZ0kwTUFmaWlvWW9kaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHllZGt2eDJhY1RLUjMrN2U3VHNKYVVGZlRqR2crM1hpL0hRTXJWdnpaNmliZw",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJA3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NG5FUG1JK3JIMzJUSFFrckFvMk5NNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUDljbk54eS84M0hDd1l2NDAzRVh2RHM",
          PRICE: "$699.00",
          LABEL: "42mm Natural Titanium Case with Black/Blue Nike Sport Loop",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Nike_Sport_Loop",
        },
        Fine_Woven: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzkyUkZrdDFobHFndTg2dVFhMU5ub1QzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aElTUnhScisyVTE2blhobVRJMDBtanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$749",
          LABEL: "42mm Natural Titanium Case with Black Magnetic Link",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Fine_Woven",
        },
        Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzkyUkZrdDFobHFndTg2dVFhMU5ub1QzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL93ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dUNHTVAyQVdwSGwzeGJZRHFKdjhoVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$699",
          LABEL: "42mm Natural Titanium Case with Lake Green Sport Band",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzkyUkZrdDFobHFndTg2dVFhMU5ub1QzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL03_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WVFGTUlRWkZ4a1dJanBDbXJZMDUyb1dnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
          PRICE: "$699",
          LABEL: "42mm Natural Titanium Case with Ultramarine Sport Loop",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-natural-cell-s10_VW_PF+watch-face-42-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4dVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzkyUkZrdDFobHFndTg2dVFhMU5ub1QzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMM3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RUVrR0pYQnFkVXB2VXdybU1jWHBDNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
          PRICE: "$749",
          LABEL: "42mm Natural Titanium Case with Natural Milanese Loop",
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
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
          PRICE: "From $479",
          LABEL:
            "46mm Jet Black Aluminum Case with Lake Green Braided Solo Loop",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "From $479",
          LABEL: "46mm Jet Black Aluminum Case with Black Magnetic Link",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-black-blue-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmxiZHAzYTNVY0EzemZ0T2VDejBzYXl3NStnUTNXaCtXZ2hrREVxUThnR2FkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCsyYkkzNTk2U2hTV0UwWnlJd09ZNVRIbFhueVhTWURCK3B0cHZUbzBsNktwUQ",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FFaUFPN0pnRW1jekVybkRsS0xBWVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM",
          PRICE: "From $429",
          LABEL: "46mm Jet Black Aluminum Case with Black/Blue Nike Sport Loop",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Loop",
        },
        Nike_Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-volt-splash-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnZWaDlra2ZCSlFwNld6eWw4NEIrNGJERklFTm1Xa0xoOW40S1BMWi9QMzNkaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHljZm9WNHVFRm9Ybld0RnRZSGs0QkFqdi83M2QwSXRvRU5ibi8ralp4VDY3Zw",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZTZYcUxpNFhjd3V2dlVEdUFIclpCanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
          PRICE: "From $429",
          LABEL:
            "46mm Jet Black Aluminum Case with Volt Splash Nike Sport Band",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Band",
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
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "From $429",
          LABEL: "46mm Jet Black Aluminum Case with Lake Green Sport Band",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
          PRICE: "From $429",
          LABEL: "46mm Jet Black Aluminum Case with Ultramarine Sport Loop",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "From $479",
          LABEL: "46mm Jet Black Aluminum Case with Natural Milanese Loop",
          SIZE: "46",
          CASE: "Aluminium",
          BAND: "Stainless_Steel",
        },
      },
      Titanium: {
        Braided_Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
          PRICE: "$799.00",
          LABEL: "46mm Natural Titanium Case with Lake Green Braided Solo Loop",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$799.00",
          LABEL: "46mm Natural Titanium Case with Black Magnetic Link",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-nike-globe-volt-splash-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzM5VEMraTNTRUcxbW4zM2FhUjFJNWQxbmVzTmtsSUR0Z2phZEc4N2NoK3J4V3ZVVEg4Q0dQMjkrdWdxM1h1U2pRQTc2ZnQ3b09SOE1vSFg4MGhpN0t4YlIwRlhSM2p5aW1wajBxM1pnY1RmRU45VzE5NjlsZnhMRlBsZVVidVFNaFpDcUFmN2FzNFMyb2EvSElPOEFLZw",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZTZYcUxpNFhjd3V2dlVEdUFIclpCanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
          PRICE: "$749.00",
          LABEL: "46mm Natural Titanium Case with Volt Splash Nike Sport Band",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-nike-globe-black-blue-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsLzM5VEMraTNTRUcxbW4zM2FhUjFJNVQ0SDV6YldPU2FwZVVTUHUvRmt4b05MOThYYThPaTFmZ0kwTUFmaWlvWW9kaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHljeE1WeGdjWjZrdG1YUis3RGJpUE1WRk1Ibk5WZDdWa1pCTWdaV3J3YzQxQQ",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FFaUFPN0pnRW1jekVybkRsS0xBWVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM",
          PRICE: "$749.00",
          LABEL: "46mm Natural Titanium Case with Black/Blue Nike Sport Loop",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Nike_Sport_Loop",
        },
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$749.00",
          LABEL: "46mm Natural Titanium Case with Black Solo Loop",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$749.00",
          LABEL: "46mm Natural Titanium Case with Lake Green Sport Band",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
          PRICE: "$749.00",
          LABEL: "46mm Natural Titanium Case with Ultramarine Sport Loop",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$799.00",
          LABEL: "46mm Natural Titanium Case with Natural Milanese Loop",
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
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-silver-cell-hermes10s_VW_PF+watch-face-42-radial-beton-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4bG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaFZNbGZBblNteUNpL1hVRWxOUWExdTVlZGxZN0hMdWlvSVRwUUpmY2F0WFZpWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJC3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QmVXNjBieFpBWFlXQ3M5WmNUMHYyWXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
          LABEL: "42mm Silver Titanium Case with Gold/Écru Toile H Single Tour",
          PRICE: "$1,249.00",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Toile_H",
        },
        Hermes_Torsade: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK13_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dWNmV2ZYQlVibC85Wi9lVGdvNit1SXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK13_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dWNmV2ZYQlVibC85Wi9lVGdvNit1SXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
          PRICE: "$1,349.00",
          LABEL:
            "42mm Silver Titanium Case with Vert Moyen Torsade Double Tour",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Torsade",
        },
        Hermes_Kilim: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-silver-cell-hermes10s_VW_PF+watch-face-42-circulaire-beton-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4bG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaFZNbGZBblNteUNpL1hVRWxOUWExdTA0RncwakxQSWdtVHZHQ3diZVZidnljTEhSZkxKUVpKdUw0MjVLa0hrYWRVL1N2RFBhVVJMdUd3MGdWd2Z3djlLb2RJWUR2V252KzJaem1mNHNrVDFtTnFDZzBRVVZlT1E2dFllcm93K3pCWkp4ckNoN0FxaWV5VXlWdzRlSUNOdw",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJH3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=d1VTODUzWnJJSlBoMk9zOXQzM3BxSXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
          PRICE: "$1,249.00",
          LABEL: "42mm Silver Titanium Case with Béton Kilim Single Tour",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Kilim",
        },
        Hermes_Grand_H: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-silver-cell-hermes10s_VW_PF+watch-face-42-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4bG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaFZNbGZBblNteUNpL1hVRWxOUWExdXk3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJT3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eis2RWQxeVBmT012RDlRWHI4aDk4OWJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
          PRICE: "$1,899.00",
          LABEL: "42mm Silver Titanium Case with Satiné Grand H",
          SIZE: "42",
          CASE: "Titanium",
          BAND: "Hermes_Grand_H",
        },
      },
    },
    "46": {
      Titanium: {
        Hermes_Toile_H: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-beton-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3BlZGxZN0hMdWlvSVRwUUpmY2F0WFZpWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJD3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=clcwNHBZRFkwdmZJVUhURWhXUGJISXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
          PRICE: "$1,299.00",
          LABEL: "46mm Silver Titanium Case with Gold/Écru Toile H Single Tour",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Hermes_Toile_H",
        },
        Hermes_Torsade: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-navy-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3JvenJuNzgyZlgycW5PS0FhcUxtYTZHTmxpVUhwTjk4aFRKT1E1cUU0SUdvblZRQUl2WGdMYU1NRG55TkdtTERkTi9VQnFMTGRoSHlqR0tWN2NGZkJyNFZtWFV0L1ZXaXpnM0dOWWx2OVhn",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK33_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bXZVYWxYRzNoWXRMaWpjNllsRGg3NHduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
          PRICE: "$1,299.00",
          LABEL: "46mm Silver Titanium Case with Navy Torsade Single Tour",
          SIZE: "46",
          CASE: "Titanium",
          BAND: "Hermes_Torsade",
        },
        Hermes_Kilim: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-beton-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2s0RncwakxQSWdtVHZHQ3diZVZidnljTEhSZkxKUVpKdUw0MjVLa0hrYWRVL1N2RFBhVVJMdUd3MGdWd2Z3djlLb2RJWUR2V252KzJaem1mNHNrVDFtTnFDZzBRVVZlT1E2dFllcm93K3pCWkp4ckNoN0FxaWV5VXlWdzRlSUNOdw",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJL3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bDN0VldKZjBLS1o4MU5iUGFNTVZHWXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
          PRICE: "$1,299.00",
          LABEL: "46mm Silver Titanium Case with Béton Kilim Single Tour",
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
          LABEL: "46mm Silver Titanium Case with Satiné Grand H",
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
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmVvUVRHZHpYaDdQMVkrSFlSOTRCclVTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXYR3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cjJvL3pIUjJmbktsVmZHSDAvUmRpaE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $299",
          LABEL: "40mm Silver Aluminum Case with Lake Green Braided Solo Loop",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmVvUVRHZHpYaDdQMVkrSFlSOTRCclVTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWQ3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VDVwa1RsMmIvaUJnVTRxUHlpbTNYaE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $299",
          LABEL: "40mm Silver Aluminum Case with Black Magnetic Link",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-nike-globe-volt-splash-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvck92SlRHTUtKM09TL1pTdTdWbVVuNlhOOGcyQnpocFRoM2p6cHNyNUYrRU9Ra3NWMDZBdDFPaFZoUUJhbERwTFQ2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1YR29nNjFUcEE2NGIrOHN5UmRXcVRP",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC1R4ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=enRUR1gza1daOCtoWE8zQWx0NzhOdGJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkycmdQcldqSlgrYlcreDQ1ZGhrcy9ZdHIvKzkzZENMYUJEVzUvL28yY1UrdTQ",
          PRICE: "From $249",
          LABEL: "40mm Silver Aluminum Case with Volt Splash Nike Sport Band",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-nike-globe-black-blue-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvck92SlRHTUtKM09TL1pTdTdWbVVuNlErYlp6TG9NZzV0dSs3b2tFSjBJT2V1aHArcmZoVzVVOWcwTzE3Smp4bUFvblZRQUl2WGdMYU1NRG55TkdtTERkTi9VQnFMTGRoSHlqR0tWN2NGZkJwcEV1T0huMjhCTDNDR21EenF6MHJo",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC1L4_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cWVacENHczhici9pbldLZTBlRkdib3duOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb2FqVW8zQ2J2UGQzYUs1MHFiVnZhS2c",
          PRICE: "From $249",
          LABEL: "40mm Silver Aluminum Case with Black/Blue Nike Sport Loop",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Loop",
        },
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmVvUVRHZHpYaDdQMVkrSFlSOTRCclVTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MAXN4ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Q0hsS2d3VGFWaXpWMDVISG1UQmdqdGJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkycjJoS0JiNWNyT2N2TkVUR0ljeVk4eTdKcEYzc0llTDBCVVR1QkJqb1diZXc",
          PRICE: "From $249",
          LABEL: "40mm Silver Aluminum Case with Star Fruit Solo Loop",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Solo_Loop",
        },
        Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmVvUVRHZHpYaDdQMVkrSFlSOTRCclVTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MAX54ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YTd3d1JmV3Ftcy9aMG8yS2ZUd3R3TmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkycjJoS0JiNWNyT2N2TkVUR0ljeVk4eTdKcEYzc0llTDBCVVR1QkJqb1diZXc",
          PRICE: "From $249",
          LABEL: "40mm Silver Aluminum Case with Lake Green Sport Band",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmVvUVRHZHpYaDdQMVkrSFlSOTRCclVTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MAXJ4_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RU1WdTc3ZUprelg0c243T1BLYTN0b3duOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3ArVHJTVGJWSEFLczZ6Rm9JeTFKQVE",
          PRICE: "From $249",
          LABEL: "40mm Silver Aluminum Case with Ultramarine Sport Loop",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmVvUVRHZHpYaDdQMVkrSFlSOTRCclVTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MAXK4_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QytOaUpISEVmT0Y3Zm9KR0Vkb3BuSXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3ArVHJTVGJWSEFLczZ6Rm9JeTFKQVE",
          PRICE: "From $299",
          LABEL: "40mm Silver Aluminum Case with Natural Milanese Loop",
          SIZE: "40",
          CASE: "Aluminium",
          BAND: "Stainless_Steel",
        },
      },
    },
    "44": {
      Aluminium: {
        Braided_Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MkNobEd2dlFtakpkOW9VSlZqQXhpUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $329",
          LABEL: "44mm Silver Aluminum Case with Lake Green Braided Solo Loop",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Braided_Solo_Loop",
        },
        Fine_Woven: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=U0RPY1hlbitZaGRwWXJOc2ZjWFNWaE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $329",
          LABEL: "44mm Silver Aluminum Case with Black Magnetic Link",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Fine_Woven",
        },
        Nike_Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-volt-splash-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQjNOOGcyQnpocFRoM2p6cHNyNUYrRU9Ra3NWMDZBdDFPaFZoUUJhbERwTFQ2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1XcDA1RTRVaDRJaVdkWkNnblNBQzBB",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=anRQK2VSRkNleGR0eEc1QVhYUjdEeE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
          PRICE: "From $279",
          LABEL: "44mm Silver Aluminum Case with Volt Splash Nike Sport Band",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Nike_Sport_Band",
        },
        Nike_Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-black-blue-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQncrYlp6TG9NZzV0dSs3b2tFSjBJT2V1aHArcmZoVzVVOWcwTzE3Smp4bUFvblZRQUl2WGdMYU1NRG55TkdtTERkTi9VQnFMTGRoSHlqR0tWN2NGZkJvd2Uwb3IwclVEMHFPSTFOY2VmZWdY",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUdJUy9hYXc4b0lsVjUyQXBUMS9lc1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRanBYR1BZTFBUSHBFU3JWT2VYU0dVa3BnYk0yKytsZk9sZ0RzTGJyNFRMWUU",
          PRICE: "From $279",
          LABEL: "44mm Silver Aluminum Case with Black/Blue Nike Sport Loop",
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
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WEduNklCTzdONzkzanVpTi9lTUhFeE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $279",
          LABEL: "44mm Silver Aluminum Case with Lake Green Sport Band",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Sport_Band",
        },
        Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K2h2alJIZUdzaUNubGJzZHpvZUY2TVhUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
          PRICE: "From $279",
          LABEL: "44mm Silver Aluminum Case with Ultramarine Sport Loop",
          SIZE: "44",
          CASE: "Aluminium",
          BAND: "Sport_Loop",
        },
        Stainless_Steel: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=T0grdTFCUnRJVEsvWENzTG5QT213aE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $329",
          LABEL: "44mm Silver Aluminum Case with Natural Milanese Loop",
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
