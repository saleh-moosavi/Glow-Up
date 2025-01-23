export default function Button({ title }: { title: string }) {
  return (
    <button className="px-5 py-1 mx-auto sm:mx-0 rounded-md bg-emerald-950 text-white w-fit hover:shadow-emerald-950 hover:shadow-[0_0_10px] transition-all duration-300">
      {title}
    </button>
  );
}
