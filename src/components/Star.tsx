import { FaStar } from "react-icons/fa";

export default function Star() {
  return (
    <ul className="flex gap-x-[0.15rem] hover:*:text-emerald-700 *:text-xs mt-2 *:transition-all *:duration-300 *:cursor-pointer">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </ul>
  );
}
