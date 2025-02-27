import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Cart = () => {
  const [cart,setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);
  return (
    <>
      <Header />
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
                  <button className="orange-btn">Check Out</button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-3xl text-center my-8">Your Cart is Empty.</h1>
      )}

      <Footer />
    </>
  );
};

export default Cart;
