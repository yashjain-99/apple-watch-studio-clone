import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Intro = ({
  setIsIntroPage,
}: {
  setIsIntroPage: (isIntroPage: boolean) => void;
}) => {
  return (
    <motion.div
      className="relative h-full"
      id="intro"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute top-[17%] w-full z-20 ">
        <div className="max-w-[42rem] mx-auto my-0">
          <div>
            <span className="block text-xl tracking-[.011em] pb-3">
              Apple Watch Studio
            </span>
            <div className="">
              <span className="block font-sf-pro-display text-[64px] leading-[1.0625] tracking-[-0.009em] font-semibold">
                Choose a Case.
              </span>
              <span className="block font-sf-pro-display text-[64px] leading-[1.0625] tracking-[-0.009em] font-semibold">
                Pick a Band.
              </span>
              <span className="block font-sf-pro-display text-[64px] leading-[1.0625] tracking-[-0.009em] font-semibold">
                Create your own style.
              </span>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-base py-3 px-6 rounded-full border-2 border-transparent cursor-pointer mt-11"
              onClick={() => setIsIntroPage(false)}
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      <div className="relative top-24 text-center">
        <div className="relative h-[53vh] max-h-[29rem] min-h-[18rem] translate-y-[32rem] scale-[2] max-w-[29rem] min-w-[18rem] w-[52vh] mx-auto">
          <Image
            src="/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF.png"
            width={500}
            height={500}
            alt="Watch case"
            className="block absolute z-10 ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
          />
          <Image
            src="/MYA33ref_SR_S10_VW_PF.jpg"
            width={500}
            height={500}
            alt="Watch band"
            className="block absolute ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
