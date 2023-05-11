// libraries
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// components

// styling
import "./Navbar.css";
import "react-tooltip/dist/react-tooltip.css";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      Loot Lo 😋
    </Link>
  );
};

const Nav = () => {
  const [loginToken, setLoginToken] = useState(false);

  const ThreeDots = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <div>
          <IconButton
            className="more-options"
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            // PaperProps={{
            //   style: {
            //     width: "",
            //   },
            // }}
          >
            <MenuItem onClick={handleClose}>
              <Link className="profile-link" to="/profile">
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <button className="logout-button">Logout</button>
            </MenuItem>
          </Menu>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-links">
          <Tooltip id="Cart-tooltip" />
          <NavLink
            data-tooltip-id="Cart-tooltip"
            data-tooltip-content="Shop"
            data-tooltip-place="bottom"
            className="navLink"
            to="/cart"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>

          <Tooltip id="Wishlist-tooltip" />
          <NavLink
            data-tooltip-id="Wishlist-tooltip"
            data-tooltip-content="Wishlist"
            data-tooltip-place="bottom"
            className="navLink"
            to="/wishlist"
          >
            <i className="fa-regular fa-heart"></i>
          </NavLink>
        </div>

        <div>
          {loginToken ? (
            <ThreeDots />
          ) : (
            <>
              <Tooltip id="Login-tooltip" />
              <NavLink
                data-tooltip-id="Login-tooltip"
                data-tooltip-content="Login"
                data-tooltip-place="bottom"
                className="navLink"
                to="/login"
              >
                <i className="fa-regular fa-user"></i>
              </NavLink>
            </>
          )}
        </div>
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
