import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (!products.length) return <div>No products found</div>;

  return (
    <div className="flex flex-wrap gap-2 m-auto  md:gap-8 sm:ml-10">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
