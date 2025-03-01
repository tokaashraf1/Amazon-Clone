import toast from "react-hot-toast";

const AddToCart = ({ data, quantity, use }) => {
  function handelCart() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.push({ ...data, quantity });
    } else {
      cart = [{ ...data, quantity }];
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`product is added to Cart`);
  }

  return (
    <div className="w-[100%]">
      <button
        className={`${
          use === "products"
            ? "mt-3 w-full rounded-lg bg-[#ffcc00] px-4 py-2 text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 "
            : "yellow-btn"
        } w-[100%]`}
        onClick={() => handelCart()}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
