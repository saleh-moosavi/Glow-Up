import Products from "./Products";
import Hero from "./Hero";
import Advantages from "./Advantages";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import featuredData from "../../data/featured-product.json";
import mostData from "../../data/most-purchased-product.json";

export default function HomeIndex() {
  return (
    <>
      <Hero />
      <Products
        title="Our Featured Products"
        desc="Get the skin you wants to feel"
        data={featuredData}
      />
      <div className="bg-stone-100 mx-5 lg:mx-20 my-7 2xl:max-w-[95.75rem] 2xl:mx-auto">
        <Advantages />
      </div>

      <Products
        title="Most Purchased Products"
        desc="See what our customers love"
        data={mostData}
      />
      <Banner
        desc="New Collection"
        title="Intensive Glow Serum"
        btnTitle="Shop Now"
        img="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
      />
      <Footer />
    </>
  );
}
