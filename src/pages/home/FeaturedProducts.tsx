import ProductCard from "../../components/ProductCard";
import data from "../../data/featured-product.json";

export default function FeaturedProducts({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="mt-10">
      <article className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-xs font-semibold text-stone-700">{desc}</p>
      </article>
      <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-5 lg:mx-20 my-7 2xl:max-w-[95.75rem] 2xl:mx-auto">
        {data.map((item) => (
          <ProductCard price={item.price} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
}
