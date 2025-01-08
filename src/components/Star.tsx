import { useState } from "react";
import { FaStar } from "react-icons/fa";

const stars = [0, 1, 2, 3, 4];

export default function Star() {
  const [starIndex, setStarIndex] = useState<null | number>(null);
  return (
    <ul className="flex gap-x-[0.15rem] *:text-sm mt-2 *:transition-all *:duration-300 *:cursor-pointer">
      {stars.map((star) => (
        <FaStar
          key={star}
          className={`${
            starIndex !== null && starIndex >= star && "text-emerald-700"
          }`}
          onMouseEnter={() => setStarIndex(star)}
          onMouseLeave={() => setStarIndex(null)}
        />
      ))}
    </ul>
  );
}
