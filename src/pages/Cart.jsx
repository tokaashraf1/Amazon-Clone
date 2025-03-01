import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  let total = 0;
  if (cart) {
    total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  function handelDelete(index) {
    const updatedCart = cart.filter((item, key) => key !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <>
      <Header />
      <div className="min-h-[80vh]">
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((item, key) => (
              <div key={key}>
                <div className="flex items-center justify-between my-4 mx-7 max-sm:flex-col">
                  <div className="flex gap-7">
                    <img src={item.image} alt="" className="w-24 h-24" />
                    <div className="max-w-[60%]">
                      <h1 className="text-xl">{item.title}</h1>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-7 max-sm:mt-3">
                    <h1 className="text-2xl ">
                      Price:{" "}
                      <span className="blue">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </h1>
                    <h1 className="text-2xl">
                      Quantity: <span className="blue">{item.quantity}</span>
                    </h1>
                    <buton
                      className="red-btn"
                      onClick={() => handelDelete(key)}
                    >
                      Delete
                    </buton>
                  </div>
                </div>
                <hr className="border-stone-400" />
              </div>
            ))}
            <div className="flex items-center justify-between m-5">
              <h1 className="text-2xl font-semibold text-[#111827]">
                Total Price: <span className="blue">${total.toFixed(2)}</span>
              </h1>
              <button className="orange-btn">Check Out</button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="my-6 text-3xl text-center">Your Cart is Empty.</h1>
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="w-40 ml-[680px] mt-[10px] text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Back
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
