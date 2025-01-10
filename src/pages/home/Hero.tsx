import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import sliderData from "../../data/hero-slider.json";

type slideType = {
  img: string;
  title: string;
  desc: string;
  id: number;
};

export default function Hero() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderData.map((slide: slideType) => (
        <SwiperSlide key={slide.id}>
          <div className="w-screen h-screen relative">
            <img
              src={slide.img}
              className="absolute object-cover object-right w-full h-full -z-10"
            />
            <div className="h-screen px-10 flex flex-col gap-y-5 text-left justify-center justify-items-center">
              <p className="text-xs font-bold">ESSENTIAL ITEMS</p>
              <h2 className="text-3xl font-bold w-64">{slide.title}</h2>
              <p className="w-64 text-xs font-bold text-stone-700">
                {slide.desc}
              </p>
              <button className="text-left px-5 py-1 rounded-md bg-emerald-950 text-white w-fit hover:shadow-emerald-950 hover:shadow-[0_0_10px] transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
