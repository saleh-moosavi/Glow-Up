export default function FooterItem({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col items-center text-left">
      <div>
        <p className="font-bold text-sm mb-2 text-white cursor-pointer">
          {title}
        </p>
        <ul className="*:text-xs font-semibold *:pb-2 *:text-gray-300 *:cursor-pointer">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
