import { useState } from "react";
import AddToCart from "./AddToCart";

const Payment = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

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
      <AddToCart data={data} quantity={quantity}/>
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
