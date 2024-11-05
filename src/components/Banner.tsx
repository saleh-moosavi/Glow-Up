export default function Banner(props: any) {
  return (
    <div className="relative -z-10 mx-5 lg:mx-24 mb-10">
      <img
        className="h-40 lg:h-52 w-full object-cover"
        src={props.img}
        alt=""
      />
      <div className="absolute top-0 p-2 text-left">
        <p className="text-xs font-bold text-stone-700">{props.desc}</p>
        <h3 className="font-bold my-2">{props.title}</h3>
        <button className="text-xs font-semibold px-2 py-1 rounded-md bg-emerald-950 text-white">
          {props.btnTitle}
        </button>
      </div>
    </div>
  );
}
