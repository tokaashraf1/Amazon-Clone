import { useContext, useState } from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import { ProductsContext } from "../contexts/ProductsContext";

function ProductsPage() {
  const { products, loading, error } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There is an error in getting products</div>;

  return (
    <div className="grid sm:grid-cols-[20%_80%]">
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
