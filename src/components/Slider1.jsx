import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export default function Slider1({ products }) {
  const navigate = useNavigate();
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Extra small screens
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="max-w-screen-2xl w-full px-4">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-white p-4 "
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[200px] object-contain cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
