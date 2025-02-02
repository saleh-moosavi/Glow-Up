import Star from "./Star";

interface ProductCardType {
  img: string;
  price: string;
  title: string;
}

export default function ProductCard(props: ProductCardType) {
  return (
    <div className="overflow-hidden w-full hover:-translate-y-2 cursor-pointer transition-all duration-300">
      <img className="h-52 w-full object-cover object-right" src={props.img} />
      <div className="flex flex-col items-center mt-3">
        <p className="text-center text-xs font-bold text-stone-700">
          {props.title}
        </p>
        <h4 className="font-semibold">{props.price}</h4>
        <Star />
      </div>
    </div>
  );
}
