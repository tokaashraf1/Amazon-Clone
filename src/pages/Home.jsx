import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import ProductsGrid from "../components/ProductsGrid";
import Slider1 from "../components/Slider1";
import ProductsGrid2 from "../components/ProductsGrid2";
import Slider2 from "../components/Slider2";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  async function getProducts() {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      console.log("Fetched Products:", response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return <>
  <div className="w-screen mt-28">
    <Hero products={products} />  
  </div>

  <div className=" mt-8 bg-gray-600 py-10 ">

    <ProductsGrid products={products} />

    <div className="w-screen mb-0">
      <Slider1 products={products}/>
    </div>

    <div className="my-5">
      <ProductsGrid2 products={products}/>
    </div>

    <div className="w-screen mb-0">
      <Slider2 products={products}/>
    </div>

  </div>
  </>
}
