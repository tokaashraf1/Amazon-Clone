import React, { useState, useEffect } from "react";

export default function ProductsGrid2({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Ensure first product appears by default
  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(products[0]); // Set the first product as default
    }
  }, [products]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        
        {/* Box 1 - Best Sellers in Toys */}
        <div className="bg-white text-black p-4 shadow-lg max-w-[320px] min-h-[500px] flex flex-col justify-between">
          <h3 className="text-lg font-bold h-[64px] leading-6">
            Best Sellers in Toys & Games
          </h3>

          {/* Large Displayed Product */}
          {selectedProduct && (
            <>
              <img
                key={selectedProduct.id}
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-40 object-contain bg-white p-2 rounded mb-2"
              />
              <p className="text-sm text-gray-700 h-[48px]">
                {selectedProduct.description.length > 120
                  ? `${selectedProduct.description.slice(0, 120)}...`
                  : selectedProduct.description}
              </p>
              <p className="text-lg font-semibold mt-5">${selectedProduct.price}</p>
            </>
          )}

          {/* Small Product Thumbnails */}
          <div className="grid grid-cols-4 gap-2 mt-3">
            {products.slice(0, 4).map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.title}
                className={`w-full h-16 object-contain bg-white p-1 rounded cursor-pointer transition-all duration-200
                  ${selectedProduct?.image === product.image ? "border-2 border-blue-500 scale-105" : "opacity-70"}
                `}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>

        {/* Box 2 - Women's Fashion */}
        <div className="bg-white text-black p-4 shadow-lg max-w-[320px] min-h-[500px]">
          <h3 className="text-lg font-bold h-[64px] leading-6">
            Up to 60% off | Styles for Women
          </h3>
          <div className="flex flex-col h-[400px] justify-around">
            <div className="grid grid-cols-2 gap-0">
              {products.slice(4, 8).map((product) => (
                <div className="mb-9" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-32 object-contain p-2 rounded"
                  />
                </div>
              ))}
            </div>
            <a href="#" className="block text-blue-400 cursor-pointer hover:underline text-sm">
              Explore More
            </a>
          </div>
        </div>

        {/* Box 3 - Best Sellers in Beauty */}
        <div className="bg-white text-black p-4 shadow-lg max-w-[320px] min-h-[500px] flex flex-col justify-between">
          <h3 className="text-lg font-bold h-[64px]">Best Sellers in Beauty</h3>
          <div className="grid grid-cols-2 gap-5 mb-7">
            {products.slice(8, 12).map((product) => (
              <img
                src={product.image}
                alt={product.title}
                key={product.id}
                className="h-[162px] w-[135px]"
              />
            ))}
          </div>
        </div>

        {/* Box 4 - Latest Styles */}
        <div className="bg-white text-black p-4 shadow-lg max-w-[320px] min-h-[500px]">
          <h3 className="text-lg font-bold h-[64px] leading-6">
            Latest styles | Dresses, kurta & more | 50% -...
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {products.slice(12, 16).map((product) => (
              <div key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[150px] w-[150px] p-1"
                />
                <p className="text-center text-gray-700">{product.category}</p>
              </div>
            ))}
          </div>
          <a href="#" className="block text-blue-400 cursor-pointer hover:underline text-sm">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
