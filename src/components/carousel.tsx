import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Navigation } from "swiper/modules";
import Image from "next/image";
import useCarouselData from "@/hooks/useCarouselData";
import { useSwiperInstanceContext } from "@/context/SwiperInstanceProvider";
import {
  setBand,
  setCase,
  setSize,
  useStateContext,
} from "@/context/StateProvider";
import { useFilterStateContext } from "@/context/FilterStateProvider";

export default function Carousel() {
  const { data, selectedIndex } = useCarouselData()!;
  const { dispatch } = useStateContext();
  const { openFilter } = useFilterStateContext();
  const { setSwiperInstance } = useSwiperInstanceContext();

  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        mousewheel={true}
        initialSlide={selectedIndex}
        modules={[Mousewheel, Navigation]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        onActiveIndexChange={(swiper) => {
          if (openFilter === "size") {
            const newSize = data[swiper.activeIndex].SIZE!;
            setSize(dispatch, newSize);
          }
          if (openFilter === "band") {
            const newBand = data[swiper.activeIndex].BAND!;
            setBand(dispatch, newBand);
          }
          if (openFilter === "case") {
            const newCase = data[swiper.activeIndex].CASE!;
            setCase(dispatch, newCase);
          }
        }}
        className=" h-full w-full"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id} className="!flex">
            {openFilter != "band" && (
              <Image
                src={item.CASE_IMG!}
                width={500}
                height={500}
                alt="Watch Case"
                className="block absolute z-10 ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
              />
            )}
            {openFilter != "case" && (
              <Image
                src={item.BAND_IMG!}
                width={500}
                height={500}
                alt="Watch band"
                className="block absolute ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
              />
            )}
          </SwiperSlide>
        ))}
        <div className="absolute top-0 flex justify-center items-center h-full w-full">
          {openFilter == "band" && (
            <Image
              src={data[selectedIndex].CASE_IMG!}
              width={500}
              height={500}
              alt="Watch Case"
              className="z-10 ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
            />
          )}
          {openFilter == "case" && (
            <>
              <Image
                src={data[selectedIndex].BAND_IMG!}
                width={500}
                height={500}
                alt="Watch band"
                className="ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
              />
            </>
          )}
        </div>
      </Swiper>
    </>
  );
}
