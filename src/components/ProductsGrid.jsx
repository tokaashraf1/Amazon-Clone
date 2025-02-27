import React from "react";

export default function ProductsGrid({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-white">No products available.</p>;
  }

  // headings for each box
  const headings = [
    "Revamp your home in style",
    "Appliances for your home | Up to 55% off",
    "Starting $149 | Headphones",
    "Starting $99 | Amazon Brands & more",
    "Automotive essentials | Up to 60% off",
    "Up to 60% off | Styles for women",
    "Starting ₹199 | Amazon Brands & more",
    "Starting ₹99 | Home improvement essentials",
  ];

  const linksText = [
    "Explore all",
    "See more",
    "See all offers",
    "Shop now",
    "See more",
    "End of season sale",
    "See more",
    "Explore more",
  ];

  return (
    <div className="p-10 w-full mt-[-140px] z-50">
      {/* grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-center">
        {Array(8)
          .fill()
          .map((_, boxIndex) => (
            <div
              key={boxIndex}
              className="bg-white p-5 shadow-lg text-black w-full max-w-xs flex flex-col justify-between"
            >
              {/* heading for each box */}
              <h3 className="text-lg font-bold mb-3">{headings[boxIndex]}</h3>

              {/* Product Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {Array(4)
                  .fill()
                  .map((_, imgIndex) => {
                    const product =
                      products.length > 0
                        ? products[(boxIndex * 4 + imgIndex) % products.length]
                        : null;

                    return product ? (
                      <img
                        key={`${boxIndex}-${imgIndex}`}
                        src={product.image}
                        alt={product.title}
                        className="w-full h-32 object-contain bg-white p-2 rounded"
                      />
                    ) : null;
                  })}
              </div>

              {/* Link */}
              <a className="block text-blue-400 cursor-pointer hover:underline text-sm mt-2">
                {linksText[boxIndex]}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
