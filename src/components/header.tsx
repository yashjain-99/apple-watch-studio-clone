import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useFilterStateContext } from "@/context/FilterStateProvider";
import toast from "react-hot-toast";
import { useStateContext } from "@/context/StateProvider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface HeaderProps {
  isIntroPage: boolean;
  isBannerImgLoaded: boolean;
}

const Header: React.FC<HeaderProps> = ({ isIntroPage, isBannerImgLoaded }) => {
  const animationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { state } = useStateContext();

  const createQueryString = useCallback(() => {
    const { selectedCollection, selectedSize, selectedCase, selectedBand } =
      state;

    if (
      !selectedCollection ||
      !selectedSize ||
      !selectedCase ||
      !selectedBand
    ) {
      return "";
    }

    const params = new URLSearchParams();
    params.set("collection", selectedCollection);
    params.set("size", selectedSize);
    params.set("case", selectedCase);
    params.set("band", selectedBand);

    return params.toString();
  }, []);

  const { setOpenFilter } = useFilterStateContext();

  const handleSave = async () => {
    const { collection, size, caseType, band } = Object.fromEntries(
      searchParams.entries()
    );

    try {
      if (!collection && !size && !caseType && !band) {
        const queryString = createQueryString();
        if (queryString) {
          router.push(`${pathname}?${queryString}`);
        }
        await navigator.clipboard.writeText(
          `${window.location.href}?${queryString}`
        );
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
      toast.success("Copied to clipboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

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
            onClick={handleSave}
          >
            <span>Save</span>
          </motion.button>
        </>
      )}
    </header>
  );
};

export default Header;
