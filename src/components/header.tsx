import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useFilterStateContext } from "@/context/FilterStateProvider";

interface HeaderProps {
  isIntroPage: boolean;
  isBannerImgLoaded: boolean;
}

const Header: React.FC<HeaderProps> = ({ isIntroPage, isBannerImgLoaded }) => {
  const animationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  const { setOpenFilter } = useFilterStateContext();

  return (
    <header className="absolute top-7 flex justify-between items-center w-full">
      <Link href="/" className="ml-9">
        <Image
          src="/apple-watch-design-studio-logo.jpg"
          width={118}
          height={26}
          className="w-[90px] h-auto"
          alt="Apple Watch"
        />
      </Link>
      {!isIntroPage && (
        <>
          <div className="-translate-x-[30%]">
            <button
              className="flex items-center"
              onClick={() => setOpenFilter("collection")}
            >
              Collection <FiChevronDown />
            </button>
          </div>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium mr-5 py-2 px-3 rounded-full border-2 border-transparent cursor-pointer"
            id="saveBtn"
            variants={animationVariants}
            initial="initial"
            animate={isBannerImgLoaded ? "animate" : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>Save</span>
          </motion.button>
        </>
      )}
    </header>
  );
};

export default Header;
