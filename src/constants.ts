import { Band, Case, Collection, Size } from "..";

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
        },
        Fine_Woven: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aElTUnhScisyVTE2blhobVRJMDBtanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$449",
          LABEL: "42mm Jet Black Aluminum Case with Black Magnetic Link",
        },
        Nike_Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJA3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NG5FUG1JK3JIMzJUSFFrckFvMk5NNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUDljbk54eS84M0hDd1l2NDAzRVh2RHM",
          PRICE: "$399",
          LABEL: "42mm Jet Black Aluminum Case with Black/Blue Nike Sport Loop",
        },
        Braided_Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL03_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WVFGTUlRWkZ4a1dJanBDbXJZMDUyb1dnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
          PRICE: "$449",
          LABEL: "42mm Jet Black Aluminum Case with Denim Braided Solo Loop",
        },
        Sport_Band: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL93ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dUNHTVAyQVdwSGwzeGJZRHFKdjhoVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "$399",
          LABEL: "42mm Jet Black Aluminum Case with Lake Green Sport Band",
        },
        Sport_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL03_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WVFGTUlRWkZ4a1dJanBDbXJZMDUyb1dnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
          PRICE: "$399",
          LABEL: "42mm Jet Black Aluminum Case with Ultramarine Sport Loop",
        },
        Stainless_Steel: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMM3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RUVrR0pYQnFkVXB2VXdybU1jWHBDNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
          PRICE: "$449",
          LABEL: "42mm Jet Black Aluminum Case with Natural Milanese Loop",
        },
      },
      Titanium: {
        Braided_Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
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
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
          PRICE: "From $429",
          LABEL: "46mm Jet Black Aluminum Case with Black Solo Loop",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
      },
      Titanium: {
        Braided_Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
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
        },
        Hermes_Torsade: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Hermes_Kilim: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Hermes_Grand_H: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
      },
    },
    "46": {
      Titanium: {
        Hermes_Toile_H: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Hermes_Torsade: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Hermes_Kilim: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Hermes_Grand_H: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
          PRICE: "$1,949.00",
          LABEL: "APPLE WATCH HERMÈS SERIES 10",
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
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
      },
    },
    "44": {
      Aluminium: {
        Braided_Solo_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Fine_Woven: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Nike_Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Solo_Loop: {
          CASE_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
          BAND_IMG:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
          PRICE: "From $279",
          LABEL: "44mm Silver Aluminum Case with Star Fruit Solo Loop",
        },
        Sport_Band: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Sport_Loop: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
        Stainless_Steel: {
          CASE_IMG: "IMG_LINK",
          BAND_IMG: "IMG_LINK",
          PRICE: "price",
        },
      },
    },
  },
};
