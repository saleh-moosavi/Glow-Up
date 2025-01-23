import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";

interface dataType {
  id: number;
  img: string;
  title: string;
  price: string;
}

export default function Products({
  title,
  desc,
  data,
}: {
  title: string;
  desc: string;
  data: Array<dataType>;
}) {
  return (
    <div className="my-10">
      <article className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-xs font-semibold text-stone-700">{desc}</p>
      </article>
      <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-5 lg:mx-20 my-7 2xl:max-w-[95.75rem] 2xl:mx-auto">
        {data.map((item) => (
          <ProductCard
            price={item.price}
            title={item.title}
            img={item.img}
            key={item.id}
          />
        ))}
      </div>
      <Button title="Show More" />
    </div>
  );
}
