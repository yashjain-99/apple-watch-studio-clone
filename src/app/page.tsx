"use client";

import { useState } from "react";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Info from "@/components/info";
import Footer from "@/components/footer";

export default function Home() {
  const [isIntroPage, setIsIntroPage] = useState<boolean>(true);
  const [isBannerImgLoaded, setIsBannerImgLoaded] = useState<boolean>(false);

  return (
    <main className="relative h-screen min-h-9 min-w-[400px] overflow-x-hidden">
      <Header isBannerImgLoaded={isBannerImgLoaded} isIntroPage={isIntroPage} />
      {isIntroPage && <Intro setIsIntroPage={setIsIntroPage} />}
      {!isIntroPage && (
        <Info
          isBannerImgLoaded={isBannerImgLoaded}
          setIsBannerImgLoaded={setIsBannerImgLoaded}
        />
      )}
      {!isIntroPage && isBannerImgLoaded && <Footer />}
    </main>
  );
}
