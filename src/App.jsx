import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductsContext";
import { WishlistProvider } from "./contexts/WishListContext";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
import RequiredAuth from "./auth/RequiredAuth";
import Error404 from "./pages/Error404";
import { SearchProvider } from "./contexts/SearchContext";

// Lazy Loading Pages
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const WishList = lazy(() => import("./pages/WishList"));

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <SearchProvider>
            <Router>
              <Suspense
                fallback={
                  <div className="p-10 text-2xl text-center">Loading...</div>
                }
              >
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
              </Suspense>

              <Toaster />
            </Router>
          </SearchProvider>
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
