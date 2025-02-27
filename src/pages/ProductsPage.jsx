import FilterAndSort from "../components/FilterAndSort";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
function ProductsPage() {
  return (
    <>
    <Header/>
      <div className="grid sm:grid-cols-[20%_80%] ">
        <FilterAndSort />
        <ProductList />
      </div>
      <Footer/>
    </>
  );
}

export default ProductsPage;