import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import sliderData from "../../data/hero-slider.json";
import Button from "../../components/Button";

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
            <div className="h-screen px-10 flex flex-col gap-y-5 text-center sm:text-left justify-center justify-items-center">
              <div className="flex flex-col gap-y-5 rounded-xl p-5 sm:p-0 bg-white/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-0">
                <p className="text-xs font-bold">ESSENTIAL ITEMS</p>
                <h2 className="text-3xl font-bold w-64 mx-auto sm:mx-0">
                  {slide.title}
                </h2>
                <p className="w-64 text-xs font-bold text-stone-700 mx-auto sm:mx-0">
                  {slide.desc}
                </p>
              </div>
              <Button title="Shop Now" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
