export default function FooterItem() {
  return (
    <div className="flex flex-col items-center text-left">
      <div>
        <p className="font-bold text-sm mb-2 text-white cursor-pointer">
          Category
        </p>
        <ul className="*:text-xs font-semibold *:pb-2 *:text-gray-300 *:cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
