import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { guarantee } from "../utils/constant";
import Payment from "../components/Payment";
import Testimonials from "../components/Testimonials";
import StarsRate from "../components/StarsRate";
import "../style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductPage = () => {
  const id = useParams();
  const [product, setProduct] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(product);
  return (
    <section>
      <Header/>
      <p className="ml-5 text-[#787878]">
        {product.category}
        <i className="fa-solid fa-chevron-right ml-2"></i>
      </p>
      <div className="m-5 flex max-md:flex-col relative">
        <div className="flex gap-[15%] md:max-w-[30%] justify-between">
          <div className="max-w-[15%]">
            {[0, 1].map((index) => (
              <img
                key={index}
                src={product.image}
                alt=""
                className={`cursor-pointer p-[5px] rounded-2xl m-2 ${
                  activeIndex === index ? "border-2 border-blue-400" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div className="max-w-[85%] flex justify-center items-center">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="md:max-w-[40%] mx-[5%] max-md:my-3">
          <div>
            <p className="blue">Brand: {product.title}</p>
            <p className="text-[#5C5C5C] text-xl">{product.description}</p>
          </div>
          <div>
            <div className="flex justify-start items-center gap-1 my-3">
              <p>{product.rating?.rate}</p>
              <StarsRate rating={product.rating?.rate} />
              <i className="fa-solid fa-chevron-down"></i>
              <p className="blue ml-2">
                {product.rating?.count} ratings <span color="black">|</span>{" "}
                Search this page
              </p>
            </div>
          </div>
          <hr className="border-[#787878]" />
          <div className="my-3 flex flex-col gap-3">
            <h1 className="text-2xl">
              <sup>SAR</sup>
              {product.price}
              <sup>14</sup>
            </h1>
            <p className="gray">All price include VAT.</p>
            <p>
              <span className="text-[#5C5C5C]">Sign in to redeem </span>
              <span className="bg-[#71ED58]"> Extra 20% </span>
              <span> off with meem credit cards.</span>
            </p>
            <p>Enter code MEEM20 at checkout. Discount by Amazon.</p>
            <div className="flex gap-3 mt-3">
              {guarantee.map((g, key) => (
                <div
                  key={key}
                  className="flex content-center items-center flex-col text-center"
                >
                  <img src={g.img} alt="" />
                  <p className="blue">{g.p}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="border-[#787878]" />
          <div>
            <h1 className=" font-bold my-3">About this item :</h1>
            <ul className="list-disc ml-5">
              <li>
                Feature: square neck, cutout, puff sleeve, ruffle hem, tie back
                aline dress
              </li>
              <li>
                Fabric has some stretch,and it&apos;s soft and comfortable
              </li>
              <li>
                Suitable for daily wear, holidays, dating, vacation, weekend
                casual
              </li>
              <li>Care Instructions: Machine wash or professional dry clean</li>
            </ul>
          </div>
        </div>
        <Payment data={product} />
      </div>
      <hr className="border-[#787878]" />
      <Testimonials rating={product.rating?.rate} />
      <Footer/>
    </section>
  );
};

export default ProductPage;
