import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Cart = () => {
  const [cart,setCart] = useState([]);
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

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
      <div className="h-[80vh]">
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((item, key) => (
              <div key={key}>
                <div className="flex justify-between items-center my-4 mx-7">
                  <div className="flex gap-7">
                    <img src={item.image} alt="" className="w-24 h-24" />
                    <div className="max-w-[60%]">
                      <h1 className="text-xl">{item.title}</h1>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-7 justify-center items-center">
                    <h1 className="text-3xl blue">${item.price}</h1>

                    <buton
                      className="red-btn"
                      onClick={() => handelDelete(key)}
                    >
                      Delete
                    </buton>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            <div className="flex m-5 justify-between items-center">
              <h1 className="text-2xl font-semibold text-[#111827]">
                Total: <span className="blue">${total}</span>
              </h1>
              <button className="orange-btn">Check Out</button>
            </div>
          </div>
        ) : (
          <h1 className="text-3xl text-center my-8">Your Cart is Empty.</h1>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
