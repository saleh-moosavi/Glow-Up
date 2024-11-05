import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import Advantages from "./Advantages";

export default function HomeIndex() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <div className="bg-stone-100">
        <Advantages />
      </div>
    </>
  );
}
