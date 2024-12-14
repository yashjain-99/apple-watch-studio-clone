import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useStateContext } from "@/context/StateProvider";
import { COLLECTION } from "@/constants";
import { getData } from "@/utils";

interface InfoProps {
  isBannerImgLoaded: boolean;
  setIsBannerImgLoaded: (isBannerImgLoaded: boolean) => void;
}

const Info: React.FC<InfoProps> = ({
  isBannerImgLoaded,
  setIsBannerImgLoaded,
}) => {
  const { state } = useStateContext();
  const [animationVariant, setAnimationVariant] = useState<Variants>({
    initial: { y: 512, scale: 2 },
    animate: { y: 0, scale: 1 },
  });

  const data = getData(
    state.selectedCollection,
    state.selectedSize,
    state.selectedCase,
    state.selectedBand
  );

  useEffect(() => {
    if (isBannerImgLoaded) {
      setAnimationVariant({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      });
    }
  }, [isBannerImgLoaded]);

  return (
    <div className="relative top-[82px] text-center flex flex-col items-center">
      <motion.div
        id="bannerImg"
        key={`${state.selectedCollection}`}
        initial="initial"
        animate="animate"
        variants={animationVariant}
        viewport={{ amount: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        onAnimationComplete={() => setIsBannerImgLoaded(true)}
        className="relative h-[53vh] max-h-[29rem] min-h-[18rem] max-w-[29rem] min-w-[18rem] w-[52vh]"
      >
        <Image
          src={data.CASE_IMG}
          width={500}
          height={500}
          alt="Watch Case"
          className="block absolute z-10 ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
        />
        <Image
          src={data.BAND_IMG}
          width={500}
          height={500}
          alt="Watch band"
          className="block absolute ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
        />
      </motion.div>
      {isBannerImgLoaded && (
        <motion.div
          className="pt-[2vh] w-[60%]"
          id="bannerInfo"
          key={`Info_${state.selectedCollection}`}
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
              {`${COLLECTION[state.selectedCollection!]}`}
            </span>
            <span className="block font-semibold mb-1 text-xs tracking-[-0.01em] leading-5">
              {`${data.LABEL}`}
            </span>
            <div className="block text-sm tracking-[-0.016em] leading-6">
              <span>From </span>
              <span className="inline-block whitespace-nowrap">{`${data.PRICE}`}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Info;
