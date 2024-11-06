import ProductCard from "../../components/ProductCard";

export default function FeaturedProducts() {
  return (
    <div className="mt-10">
      <article className="text-center">
        <h3 className="text-xl font-bold mb-2">Our Featured Products</h3>
        <p className="text-xs font-semibold text-stone-700">
          Get the skin you wants to feel
        </p>
      </article>
      <div className="grid grid-cols-2 justify-items-center lg:grid-cols-4 gap-5 mx-5 lg:mx-20 my-7 2xl:max-w-[95.75rem] 2xl:mx-auto">
        <ProductCard
          price="$15.00 - $20.00"
          desc="Natural Coconut Cleaning Oil"
          img="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
        />
        <ProductCard
          price="$15.00 - $20.00"
          desc="Natural Coconut Cleaning Oil"
          img="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
        />
        <ProductCard
          price="$15.00 - $20.00"
          desc="Natural Coconut Cleaning Oil"
          img="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
        />
        <ProductCard
          price="$15.00 - $20.00"
          desc="Natural Coconut Cleaning Oil"
          img="https://img.freepik.com/premium-photo/stylish-display-essential-cosmetic-items-featuring-lipstick-brushes-powder-set-against-serene-light-backdrop-generative-ai_262708-55452.jpg"
        />
      </div>
    </div>
  );
}
