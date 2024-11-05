import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <div className="mt-10 py-5 bg-emerald-800/70">
      <div className="text-center pb-5">
        <h3 className="text-xl font-semibold text-white">
          Best Beauty Shopping
        </h3>
      </div>
      <article className="grid grid-cols-3 gap-x-5 mx-5 lg:mx-20">
        <FooterItem />
        <FooterItem />
        <FooterItem />
      </article>
      <p className="font-semibold text-white mt-5">2024 All Rights Reserved</p>
    </div>
  );
}
