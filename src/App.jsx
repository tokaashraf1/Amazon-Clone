import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails"; // Import ProductDetails
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductsContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "./contexts/WishListContext";
import WishList from "./pages/WishList";
import RequiredAuth from "./auth/RequiredAuth";
import Error404 from "./pages/Error404";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <Router>
            <Routes>
              <Route path="/*" element={<Error404 />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
              <Route element={<RequiredAuth />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Toaster />
          </Router>
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
