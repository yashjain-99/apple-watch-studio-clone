"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Info from "@/components/info";
import Footer from "@/components/footer";
import CollectionModal from "@/components/collection-modal";
import {
  setBand,
  setCase,
  setCollection,
  setSize,
  useStateContext,
} from "@/context/StateProvider";

export default function Home() {
  const [isIntroPage, setIsIntroPage] = useState<boolean>(true);
  const [isBannerImgLoaded, setIsBannerImgLoaded] = useState<boolean>(false);
  const { dispatch } = useStateContext();

  useEffect(() => {
    setCollection(dispatch, "BASE");
    setSize(dispatch, "46");
    setCase(dispatch, "Aluminium");
    setBand(dispatch, "Solo_Loop");
  }, []);

  return (
    <main
      className="relative h-screen min-h-9 min-w-[400px] overflow-x-hidden overflow-y-scroll"
      id="main"
    >
      <Header isBannerImgLoaded={isBannerImgLoaded} isIntroPage={isIntroPage} />
      {isIntroPage && <Intro setIsIntroPage={setIsIntroPage} />}
      {!isIntroPage && (
        <Info
          isBannerImgLoaded={isBannerImgLoaded}
          setIsBannerImgLoaded={setIsBannerImgLoaded}
        />
      )}
      {!isIntroPage && isBannerImgLoaded && <Footer />}
      <CollectionModal />
    </main>
  );
}
