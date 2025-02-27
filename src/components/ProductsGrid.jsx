import { useNavigate } from "react-router-dom";

export default function ProductsGrid({ products }) {
  const navigate = useNavigate();
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
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {Array(8)
          .fill()
          .map((_, boxIndex) => (
            <div
              key={boxIndex}
              className="flex flex-col justify-between w-full max-w-xs p-5 text-black bg-white shadow-lg"
            >
              {/* heading for each box */}
              <h3 className="mb-3 text-lg font-bold">{headings[boxIndex]}</h3>

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
                        className="object-contain w-full h-32 p-2 bg-white rounded"
                      />
                    ) : null;
                  })}
              </div>

              {/* Link */}
              <a
                onClick={() => navigate("/products")}
                className="block mt-2 text-sm text-blue-400 cursor-pointer hover:underline"
              >
                {linksText[boxIndex]}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
