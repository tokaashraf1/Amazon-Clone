import { useContext } from "react";
import { ProductContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { products, loading, error } = useContext(ProductContext);
  console.log(products);
  const { id, image, price, title, category } = products;

  if (loading) return <div>loading...</div>;
  if (error) return <div>there is error in getting products</div>;

  return (
    <div className=" flex flex-wrap  md:gap-8 m-auto gap-2 sm:ml-10 ">
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