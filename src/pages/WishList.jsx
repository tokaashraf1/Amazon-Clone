import { useContext } from "react";
import { WishlistContext } from "../contexts/WishListContext";
import { useNavigate } from "react-router-dom";
import AddToCart from "../components/AddToCart";

function WishList() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  console.log(wishlist);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-center m-7 ">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <>
          <p className="text-center">No items in wishlist.</p>
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="w-40 ml-[700px] text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Back
          </button>
        </>
      ) : (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cart
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.title}
                    </td>
                    <td className="px-6 py-4">${product.price}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <AddToCart data={product} quantity={1} use={"products"} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="w-40 ml-[700px] mt-[60px] text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default WishList;
