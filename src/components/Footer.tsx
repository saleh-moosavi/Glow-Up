import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <div className="mt-10 py-5 bg-emerald-800/70">
      <article className="grid grid-cols-3 justify-items-center gap-x-5 mx-5 lg:mx-20 xl:max-w-[70rem] xl:mx-auto">
        <img className="w-24 h-24" src="../../public/assets/QrCode-white.svg" />
        <FooterItem />
        <FooterItem />
      </article>
      <div className="flex gap-x-5 justify-center my-5 *:size-6 *:text-white *:cursor-pointer">
        <BsInstagram className="hover:-translate-y-1 transition-all duration-300"/>
        <BsYoutube className="hover:-translate-y-1 transition-all duration-300"/>
        <BsTelegram className="hover:-translate-y-1 transition-all duration-300"/>
        <BsFacebook className="hover:-translate-y-1 transition-all duration-300"/>
      </div>
      <p className="font-semibold text-white">2024 All Rights Reserved</p>
    </div>
  );
}
