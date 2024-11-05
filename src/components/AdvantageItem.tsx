export default function AdvantageItem(props: any) {
  return (
    <div className="flex flex-col items-center text-center">
      {props.icon}
      <h3 className="text-sm font-bold mt-2 text-emerald-900">{props.title}</h3>
      <p className="text-xs font-semibold text-stone-600">{props.desc}</p>
    </div>
  );
}
