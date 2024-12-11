import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface InfoProps {
  isBannerImgLoaded: boolean;
  setIsBannerImgLoaded: (isBannerImgLoaded: boolean) => void;
}

const Info: React.FC<InfoProps> = ({
  isBannerImgLoaded,
  setIsBannerImgLoaded,
}) => {
  return (
    <div className="relative top-[82px] text-center flex flex-col items-center">
      <motion.div
        id="bannerImg"
        initial={{ y: 512, scale: 2 }}
        animate={{ y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        onAnimationComplete={() => setIsBannerImgLoaded(true)}
        className="relative h-[53vh] max-h-[29rem] min-h-[18rem] max-w-[29rem] min-w-[18rem] w-[52vh]"
      >
        <Image
          src="/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF.png"
          width={500}
          height={500}
          alt=""
          className="block absolute z-10 ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
        />
        <Image
          src="/MYA33ref_SR_S10_VW_PF.jpg"
          width={500}
          height={500}
          alt=""
          className="block absolute ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
        />
      </motion.div>
      {isBannerImgLoaded && (
        <motion.div
          className=" pt-[2vh] w-[60%]"
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
              APPLE WATCH SERIES 10
            </span>
            <span className="block font-semibold mb-1 text-xs tracking-[-0.01em] leading-5">
              46mm Jet Black Aluminum Case with Black Solo Loop
            </span>
            <div className="block text-sm tracking-[-0.016em] leading-6">
              <span>From </span>
              <span className=" inline-block whitespace-nowrap">$426</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Info;
