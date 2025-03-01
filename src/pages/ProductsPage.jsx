// import FilterAndSort from "../components/FilterAndSort";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import { ProductsContext } from "../contexts/ProductsContext";
import { useSearch } from "../contexts/SearchContext";

function ProductsPage() {
  const { products, loading, error } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { searchQuery } = useSearch();

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There is an error in getting products</div>;

  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-[20%_80%] ">
        <Filter products={products} setFilteredProducts={setFilteredProducts} />
        <ProductList products={filteredProducts} />
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
