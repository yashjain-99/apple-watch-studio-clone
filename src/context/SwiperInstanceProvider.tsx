"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  ReactElement,
} from "react";
import Swiper from "swiper";

interface SwiperInstanceContextType {
  swiperInstance: undefined | Swiper;
  setSwiperInstance: (swiper: Swiper) => void;
}

const SwiperInstanceContext = createContext<
  SwiperInstanceContextType | undefined
>(undefined);

const SwiperInstanceProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [swiperInstance, setSwiperInstance] = useState<Swiper | undefined>(
    undefined
  );

  return (
    <SwiperInstanceContext.Provider
      value={{ swiperInstance, setSwiperInstance }}
    >
      {children}
    </SwiperInstanceContext.Provider>
  );
};

export const useSwiperInstanceContext = (): SwiperInstanceContextType => {
  const context = useContext(SwiperInstanceContext);

  if (!context) {
    throw new Error(
      "useSwiperInstanceContext must be used within a SwiperInstanceProvider"
    );
  }

  return context;
};

export default SwiperInstanceProvider;
