"use client";

import { useEffect, useState, useCallback } from "react";
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
import { useSearchParams } from "next/navigation";
import { getData } from "@/utils";
import { Band, Case, Collection, Size } from "../..";

const Main = () => {
  const [isIntroPage, setIsIntroPage] = useState<boolean>(true);
  const [isBannerImgLoaded, setIsBannerImgLoaded] = useState<boolean>(false);
  const { dispatch } = useStateContext();
  const searchParams = useSearchParams();

  const updateStateFromParams = useCallback(() => {
    const { collection, size, caseType, band } = Object.fromEntries(
      searchParams.entries()
    );

    if (collection || size || caseType || band) {
      setIsIntroPage(false);
      setIsBannerImgLoaded(true);
    }

    const data = getData(
      collection as Collection,
      size as Size,
      caseType as Case,
      band as Band
    );

    if (data) {
      setCollection(dispatch, data.COLLECTION);
      setSize(dispatch, data.SIZE);
      setCase(dispatch, data.CASE);
      setBand(dispatch, data.BAND);
    }
  }, []);

  useEffect(() => {
    updateStateFromParams();
  }, []);
  return (
    <main
      className="relative h-screen min-h-9 min-w-[400px] overflow-x-hidden overflow-y-scroll"
      id="main"
    >
      <Header isBannerImgLoaded={isBannerImgLoaded} isIntroPage={isIntroPage} />
      {isIntroPage ? (
        <Intro setIsIntroPage={setIsIntroPage} />
      ) : (
        <>
          <Info
            isBannerImgLoaded={isBannerImgLoaded}
            setIsBannerImgLoaded={setIsBannerImgLoaded}
          />
          {isBannerImgLoaded && <Footer />}
        </>
      )}
      <CollectionModal />
    </main>
  );
};

export default Main;
