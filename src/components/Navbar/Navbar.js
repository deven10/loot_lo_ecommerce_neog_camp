import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      Loot Lo 😋
    </Link>
  );
};

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/shop">
          Shop
        </NavLink>
        <NavLink className="navLink" to="/cart">
          Cart
        </NavLink>
        <NavLink className="navLink" to="/wishlist">
          Wishlist
        </NavLink>
      </div>
    </>
  );
};

export const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <Nav />
    </nav>
  );
};
