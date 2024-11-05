import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
      <SwiperSlide>
        <div className="w-screen h-screen relative">
          <img
            src="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
            className="absolute object-cover object-right w-full h-full -z-10"
          />
          <div className="h-screen px-10 flex flex-col gap-y-5 text-left justify-center justify-items-center">
            <p className="text-xs font-bold">ESSENTIAL ITEMS</p>
            <h2 className="text-3xl font-bold w-64">
              Beauty Inspired By Real Life
            </h2>
            <p className="w-64 text-xs font-bold text-stone-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              inventore laboriosam reprehenderit amet esse similique, harum.
            </p>
            <button className="text-left px-5 py-1 rounded-md bg-emerald-950 text-white w-fit hover:shadow-emerald-950 hover:shadow-[0_0_10px] transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-screen relative">
          <img
            src="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
            className="absolute object-cover object-right w-full h-full -z-10"
          />
          <div className="h-screen px-10 flex flex-col gap-y-5 text-left justify-center justify-items-center">
            <p className="text-xs font-bold">ESSENTIAL ITEMS</p>
            <h2 className="text-3xl font-bold w-64">
              Beauty Inspired By Real Life
            </h2>
            <p className="w-64 text-xs font-bold text-stone-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              inventore laboriosam reprehenderit amet esse similique, harum.
            </p>
            <button className="text-left px-5 py-1 rounded-md bg-emerald-950 text-white w-fit hover:shadow-emerald-950 hover:shadow-[0_0_10px] transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-screen relative">
          <img
            src="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
            className="absolute object-cover object-right w-full h-full -z-10"
          />
          <div className="h-screen px-10 flex flex-col gap-y-5 text-left justify-center justify-items-center">
            <p className="text-xs font-bold">ESSENTIAL ITEMS</p>
            <h2 className="text-3xl font-bold w-64">
              Beauty Inspired By Real Life
            </h2>
            <p className="w-64 text-xs font-bold text-stone-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              inventore laboriosam reprehenderit amet esse similique, harum.
            </p>
            <button className="text-left px-5 py-1 rounded-md bg-emerald-950 text-white w-fit hover:shadow-emerald-950 hover:shadow-[0_0_10px] transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
