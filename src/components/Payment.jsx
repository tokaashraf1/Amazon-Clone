import { useState } from "react";
import { succes } from "../assets/icons";

const Payment = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  function handelCart() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.push({ ...data, quantity });
    } else {
      cart = [{ ...data, quantity }];
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  }

  return (
    <div className="border-[1px] border-stone-400 rounded p-5 h-[fit-content]  flex flex-col gap-3">
      <h1 className="text-2xl">
        <sup>SAR</sup>
        {data.price}
        <sup>14</sup>
      </h1>
      <p>
        SAR96 delivery <span className="font-bold">6-9 October.</span>
      </p>
      <p className="blue">Details</p>
      <div className="flex gap-2">
        <i className="fa-solid fa-location-dot"></i>
        <p className="blue">Delivery to Riyadh - Update Location</p>
      </div>
      <p className="font-bold text-[#B12704]">
        Usually ships within 4 to 5 days
      </p>
      <div className="flex gap-7 border-[1px] border-stone-400 p-3 ">
        <p>Quantity:</p>
        <p className="select-none text-xl">
          <span onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : "")}>
            <i className="fa-solid fa-minus  cursor-pointer"></i>
          </span>{" "}
          {quantity}{" "}
          <span onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus cursor-pointer"></i>
          </span>
        </p>
      </div>
      <button className="yellow-btn" onClick={() => handelCart()}>
        Add to Cart
      </button>
      {showMessage && (
        <div className="md:w-[25%] absolute bottom-[-5%] right-[10px] z-[50] border-2 border-green-500 flex bg-white p-2 items-center">
          <img src={succes} width={"10%"} alt="" />
          <p className="text-green-600 ml-3">
            Product added to cart successfully
          </p>
        </div>
      )}
      <button className="orange-btn">Buy Now</button>
      <div className="gray">
        <p>Ships from : Monatik LLC</p>
        <p>
          Sold by : <span className="blue">Monatik LLC</span>
        </p>
        <p>
          Payment : <span className="blue">Secure transaction</span>
        </p>
      </div>
    </div>
  );
};

export default Payment;
