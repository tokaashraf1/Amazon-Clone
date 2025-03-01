import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Filter({ products, setFilteredProducts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const navigate = useNavigate();
  //  handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //  handle price range selection
  const handlePriceChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  // Filter products whenever the filters change
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      let matchesPrice = true;
      if (selectedPriceRange) {
        const price = product.price;
        if (selectedPriceRange === "1-20")
          matchesPrice = price >= 1 && price <= 20;
        if (selectedPriceRange === "21-50")
          matchesPrice = price >= 21 && price <= 50;
        if (selectedPriceRange === "51-150")
          matchesPrice = price >= 51 && price <= 150;
      }

      return matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPriceRange, products, setFilteredProducts]);

  return (
    <div className="flex flex-row mt-10 ml-6 text-left gap-y-9 sm:flex-col">
      <p
        onClick={() => navigate("/")}
        className="ml-5 cursor-pointer text-sky-500"
      >
        Back
        <i className="ml-2 fa-solid fa-chevron-right"></i>
      </p>
      <div id="delivery" className="hidden sm:block">
        <h3>delivary day </h3>
        <input id="delivary" type="radio" />
        <label htmlFor="delivary">Get it in 2 days</label>
      </div>
      <div id="customers" className="hidden sm:block">
        <h3>Customer Reviews</h3>
        <div className="mb-5 mt-2.5 flex items-center">
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span> & up</span>
        </div>
      </div>
      {/* Category Filter */}
      <div id="brands" className="mr-3">
        <h3 className="font-bold">Brands</h3>
        <ul>
          {[
            "All",
            "men's clothing",
            "women's clothing",
            "electronics",
            "jewelery",
          ].map((category) => (
            <li key={category}>
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div id="prices">
        <h3 className="font-bold">Prices</h3>
        <ul>
          <li>
            <input
              type="radio"
              id="all"
              name="price"
              value=""
              checked={selectedPriceRange === ""}
              onChange={handlePriceChange}
            />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input
              type="radio"
              id="min"
              name="price"
              value="1-20"
              checked={selectedPriceRange === "1-20"}
              onChange={handlePriceChange}
            />
            <label htmlFor="min">$1 - $20</label>
          </li>
          <li>
            <input
              type="radio"
              id="med"
              name="price"
              value="21-50"
              checked={selectedPriceRange === "21-50"}
              onChange={handlePriceChange}
            />
            <label htmlFor="med">$21 - $50</label>
          </li>
          <li>
            <input
              type="radio"
              id="max"
              name="price"
              value="51-150"
              checked={selectedPriceRange === "51-150"}
              onChange={handlePriceChange}
            />
            <label htmlFor="max">$51 - $150</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
