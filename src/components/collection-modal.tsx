import { COLLECTION, DEFAULTS } from "@/constants";
import { useFilterStateContext } from "@/context/FilterStateProvider";
import {
  setBand,
  setCase,
  setCollection,
  setSize,
  useStateContext,
} from "@/context/StateProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";
import Modal from "react-modal";

type CollectionType = keyof typeof COLLECTION;

const customStyles = {
  content: {
    top: "62px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, 0)",
    zIndex: "50",
    borderRadius: "18px",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: "26px",
    paddingRight: "26px",
  },
  overlay: {
    backgroundColor: "#32323270",
    zIndex: "40",
  },
};

Modal.setAppElement("#root");

const CollectionModal = () => {
  const { openFilter, setOpenFilter } = useFilterStateContext();
  const { state, dispatch } = useStateContext();
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  }, []);
  const closeModal = () => {
    setOpenFilter(undefined);
  };

  const handleCollectionChange = (collection: CollectionType) => {
    setCollection(dispatch, collection);
    router.push(pathname + "?" + createQueryString("collection", collection));
    setCase(dispatch, DEFAULTS[collection]["CASE"]);
    setSize(dispatch, DEFAULTS[collection]["SIZE"]);
    setBand(dispatch, DEFAULTS[collection]["BAND"]);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={openFilter === "collection"}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Select collection"
      >
        <ul className="divide-y divide-gray-300 px-[26px] start-0">
          {Object.keys(COLLECTION).map((collection, index) => (
            <li key={index} className=" pt-[18px] pb-[17px]">
              <button
                className="block w-full disabled:text-[#86868b]"
                disabled={state.selectedCollection == collection}
                onClick={() =>
                  handleCollectionChange(collection as CollectionType)
                }
              >
                {COLLECTION[collection as CollectionType]}
              </button>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default CollectionModal;
