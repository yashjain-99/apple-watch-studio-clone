"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen min-h-9 min-w-[400px] overflow-x-hidden">
      <header>
        <Link href="" className=" absolute top-7 start-9">
          <Image
            src="/apple-watch-design-studio-logo.jpg"
            width={118}
            height={26}
            className=" w-[90px] h-auto"
            alt="Apple watch"
          />
        </Link>
      </header>
      <div className=" overflow-visible relative h-full w-full">
        <motion.div
          className="relative h-full top-0 bottom-0"
          id="intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute top-[17%] w-full">
            <div className=" mx-auto my-0 max-w-[42rem]">
              <div>
                <span className=" block font-sf-pro-display font-normal text-xl tracking-[.011em] pb-3">
                  Apple Watch Studio
                </span>
                <span className=" block  font-sf-pro-display font-semibold text-6xl tracking-[-0,009em]">
                  Choose a Case.
                </span>
                <span className="block  font-sf-pro-display font-semibold text-6xl tracking-[-0,009em]">
                  Pick a Band.
                </span>
                <span className="block  font-sf-pro-display font-semibold text-6xl tracking-[-0,009em]">
                  Create your own style.
                </span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-base py-3 px-6 rounded-full border-2 border-transparent disabled:opacity-40 disabled:cursor-not-allowed mt-11">
                <span>Get started</span>
              </button>
            </div>
          </div>
          <div className="relative top-20 text-center">
            <div className="relative h-[53vh] max-h-[29rem] min-h-[18rem] translate-y-[32rem] scale-[2] max-w-[29rem] min-w-[18rem] w-[52vh] mx-auto my-0">
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
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
