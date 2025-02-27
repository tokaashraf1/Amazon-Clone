import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
const API_URL = "https://fakestoreapi.com";

// Create Context
export const ProductsContext = createContext();

// Provider Component
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
