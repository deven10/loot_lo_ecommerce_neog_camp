// libraries
import { Routes, Route } from "react-router-dom";

// component / pages
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { SingleProduct } from "./pages/Shop/SingleProduct";
import { Profile } from "./pages/Profile/Profile";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

// styling
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
