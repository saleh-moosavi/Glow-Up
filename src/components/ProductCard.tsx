import Star from "./Star";

export default function ProductCard(props: any) {
  return (
    <div>
      <img className="h-52 object-cover object-right" src={props.img} />
      <div className="flex flex-col items-center mt-3">
        <h4 className="text-xs font-bold">{props.price}</h4>
        <p className="text-center text-xs font-medium text-stone-700">
          {props.desc}
        </p>
        <Star />
      </div>
    </div>
  );
}
