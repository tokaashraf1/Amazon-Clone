import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (!products) return <div>No products found</div>;

  return (
    <div className="flex flex-wrap gap-2 m-auto md:gap-8 sm:ml-10">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard key={product.id} product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
