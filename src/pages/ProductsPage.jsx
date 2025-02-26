import FilterAndSort from "../components/FilterAndSort";
import ProductList from "../components/ProductList";
function ProductsPage() {
  return (
    <div className="grid sm:grid-cols-[20%_80%] ">
      <FilterAndSort />
      <ProductList />
    </div>
  );
}

export default ProductsPage;