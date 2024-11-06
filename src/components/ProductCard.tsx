import Star from "./Star";

interface ProductCardType {
  img: string;
  price: string;
  desc: string;
}

export default function ProductCard(props: ProductCardType) {
  return (
    <div className="overflow-hidden hover:-translate-y-2 cursor-pointer transition-all duration-300">
      <img className="h-52 object-cover object-right" src={props.img} />
      <div className="flex flex-col items-center mt-3">
        <h4 className="font-semibold">{props.price}</h4>
        <p className="text-center text-xs font-bold text-stone-700">
          {props.desc}
        </p>
        <Star />
      </div>
    </div>
  );
}
