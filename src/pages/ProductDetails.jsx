import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { guarantee } from "../utils/constant";
import Payment from "../components/Payment";
import Testimonials from "../components/Testimonials";
import StarsRate from "../components/StarsRate";
import "../style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error404 from "./Error404";
import LoadingPage from "../components/LoadingPage";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const id = useParams();
  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        await axios
          .get(`https://fakestoreapi.com/products/${id.id}`)
          .then((res) => setProduct(res.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <section>
      {product ? (
        <>
          <Header />
          <p
            onClick={() => navigate("/products")}
            className="m-2 cursor-pointer text-sky-500"
          >
            Back
            <i className="ml-2 fa-solid fa-chevron-right"></i>
          </p>
          <div className="relative flex m-5 max-md:flex-col">
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
                <div className="flex items-center justify-start gap-1 my-3">
                  <p>{product.rating?.rate}</p>
                  <StarsRate rating={product.rating?.rate} />
                  <i className="fa-solid fa-chevron-down"></i>
                  <p className="ml-2 blue">
                    {product.rating?.count} ratings <span color="black">|</span>{" "}
                    Search this page
                  </p>
                </div>
              </div>
              <hr className="border-[#787878]" />
              <div className="flex flex-col gap-3 my-3">
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
                      className="flex flex-col items-center content-center text-center"
                    >
                      <img src={g.img} alt="" />
                      <p className="blue">{g.p}</p>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="border-[#787878]" />
              <div>
                <h1 className="my-3 font-bold ">About this item :</h1>
                <ul className="ml-5 list-disc">
                  <li>
                    Feature: square neck, cutout, puff sleeve, ruffle hem, tie
                    back aline dress
                  </li>
                  <li>
                    Fabric has some stretch,and it&apos;s soft and comfortable
                  </li>
                  <li>
                    Suitable for daily wear, holidays, dating, vacation, weekend
                    casual
                  </li>
                  <li>
                    Care Instructions: Machine wash or professional dry clean
                  </li>
                </ul>
              </div>
            </div>
            <Payment data={product} />
          </div>
          <hr className="border-[#787878]" />
          <Testimonials rating={product.rating?.rate} />
          <Footer />{" "}
        </>
      ) : loading ? (
        <LoadingPage />
      ) : (
        <Error404 />
      )}
      ;
    </section>
  );
};

export default ProductPage;
