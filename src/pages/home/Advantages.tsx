import { FaBoxOpen, FaCoins, FaTruck } from "react-icons/fa";
import AdvantageItem from "../../components/AdvantageItem";
import { GoClockFill } from "react-icons/go";

export default function Advantages() {
  return (
    <div className="grid grid-cols-4 gap-x-5 mx-5 lg:mx-20 pt-5 pb-5">
      <AdvantageItem
        icon={<FaBoxOpen className="w-7 h-7 fill-emerald-800/70" />}
        title="Custom Package"
        desc="Design Your Own Pack"
      />
      <AdvantageItem
        icon={<FaTruck className="w-7 h-7 fill-emerald-800/70" />}
        title="Safe Delivery"
        desc="Design Your Own Pack"
      />
      <AdvantageItem
        icon={<GoClockFill className="w-7 h-7 fill-emerald-800/70" />}
        title="Custom Package"
        desc="Design Your Own Pack"
      />
      <AdvantageItem
        icon={<FaCoins className="w-7 h-7 fill-emerald-800/70" />}
        title="Custom Package"
        desc="Design Your Own Pack"
      />
    </div>
  );
}
