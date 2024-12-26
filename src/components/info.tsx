import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useStateContext } from "@/context/StateProvider";
import { COLLECTION } from "@/constants";
import { getData } from "@/utils";
import { useFilterStateContext } from "@/context/FilterStateProvider";
import Carousel from "./carousel";

interface InfoProps {
  isBannerImgLoaded: boolean;
  setIsBannerImgLoaded: (isBannerImgLoaded: boolean) => void;
}

const Info: React.FC<InfoProps> = ({
  isBannerImgLoaded,
  setIsBannerImgLoaded,
}) => {
  const { state } = useStateContext();
  const { openFilter } = useFilterStateContext();

  const data = useMemo(() => {
    return getData(
      state.selectedCollection!,
      state.selectedSize!,
      state.selectedCase!,
      state.selectedBand!
    )!;
  }, [
    state.selectedCollection,
    state.selectedSize,
    state.selectedCase,
    state.selectedBand,
  ]);

  const animationVariant = isBannerImgLoaded
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { y: 512, scale: 2 }, animate: { y: 0, scale: 1 } };

  return (
    <div className="relative top-[5rem] text-center flex flex-col items-center">
      <motion.div
        id="bannerImg"
        key={openFilter}
        initial="initial"
        animate="animate"
        variants={animationVariant}
        viewport={{ amount: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        onAnimationComplete={() => setIsBannerImgLoaded(true)}
        className="relative h-[53vh] w-full flex justify-center"
      >
        <Carousel />
      </motion.div>

      {isBannerImgLoaded && (
        <motion.div
          className="pt-[2vh]"
          id="bannerInfo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="mb-3 underline text-blue-600 text-xs tracking-[-0.01em] leading-5">
            Side view
          </button>
          <div>
            <span className="block text-[#86868b] font-semibold mb-1 text-xs tracking-[-0.01em] leading-5">
              {COLLECTION[state.selectedCollection!]}
            </span>
            <span className="block font-semibold mb-1 text-xs tracking-[-0.01em] leading-5">
              {data.LABEL}
            </span>
            <div className="block text-sm tracking-[-0.016em] leading-6">
              <span>From </span>
              <span className="inline-block whitespace-nowrap">
                {data.PRICE}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Info;
