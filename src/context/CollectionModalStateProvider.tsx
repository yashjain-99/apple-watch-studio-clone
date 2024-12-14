"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  ReactElement,
} from "react";

// Define the shape of the context
interface ModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const CollectionModalStateProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useCollectionModalStateContext = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useCollectionModalStateContext must be used within a CollectionModalStateProvider"
    );
  }

  return context;
};

export default CollectionModalStateProvider;
