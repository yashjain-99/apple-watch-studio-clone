import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Navigation } from "swiper/modules";
import Image from "next/image";
import useCarouselData from "@/hooks/useCarouselData";
import { useSwiperInstanceContext } from "@/context/SwiperInstanceProvider";

export default function Carousel() {
  const { data, selectedIndex } = useCarouselData();
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
        className=" h-full w-full mr-12 -translate-x-[2%]"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.CASE_IMG}
              width={500}
              height={500}
              alt="Watch Case"
              className="block absolute z-10 ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
            />
            <Image
              src={item.BAND_IMG}
              width={500}
              height={500}
              alt="Watch band"
              className="block absolute ms-0 h-auto max-w-[29rem] min-w-[18rem] w-[52vh]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
