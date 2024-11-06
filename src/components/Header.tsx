import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdAddCard } from "react-icons/md";

export default function Header() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-[999]">
      <div className="bg-emerald-800/70 text-center h-5 text-xs font-bold text-white">
        Glow Up
      </div>
      <nav className="flex justify-between px-5 items-center py-4">
        {windowSize > 700 ? (
          <article>
            <ul className="flex gap-x-8 *:text-xs *:cursor-pointer hover:*:shadow-[0_2px_0] hover:*:shadow-emerald-800 *:transition-all *:duration-300 *:font-bold justify-self-start">
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Pages</li>
            </ul>
          </article>
        ) : (
          <article>
            {showSideBar ? (
              <button
                onClick={() => {
                  setShowSideBar(!showSideBar);
                }}
              >
                <IoMdClose className="w-6 h-6 fill-red-500" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowSideBar(!showSideBar);
                }}
              >
                <HiOutlineMenuAlt2 className="w-6 h-6" />
              </button>
            )}
            <ul
              className={`fixed right-0 top-0 bottom-0 w-1/2 bg-slate-100 gap-y-8 *:cursor-pointer *:w-full *:p-5 hover:*:bg-emerald-100 hover:*:border-l-[0.5rem] hover:*:border-emerald-700 *:transition-all *:duration-300 transition-all duration-300 font-semibold 
                ${showSideBar ? "translate-x-0" : "translate-x-full"}`}
            >
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Pages</li>
            </ul>
          </article>
        )}

        <article>
          <ul className="flex gap-x-2 *:cursor-pointer hover:*:*:fill-emerald-800 *:*:transition-all *:*:duration-300">
            <li>
              <CiSearch className="w-6 h-6" />
            </li>
            <li>
              <IoPerson className="w-6 h-6" />
            </li>
            <li>
              <MdAddCard className="w-6 h-6" />
            </li>
          </ul>
        </article>
      </nav>
    </div>
  );
}
