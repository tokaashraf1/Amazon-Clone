import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export default function Hero({ products }) {
  const navegate = useNavigate();
  console.log(products);
  function handelClick(id){
    navegate(`/products/${id}`);
  }
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: false,
    centerMode: false,
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full mx-auto px-4">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-full flex flex-col items-center"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                onClick={() => handelClick(product.id)}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-contain bg-white p-4 cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
