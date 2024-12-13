import React, { useEffect, useState } from "react";
import { assets } from "../Utils/assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSearch } from "../Utils/searchSlice";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const cartItems = useSelector((store) => store.cart.cart);
  const userDetails = useSelector((store) => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchbar = () => {
    dispatch(setShowSearch());
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        setShowLogout(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
    return () => unSubscribe();
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setShowLogout(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center p-4 border-b-2">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28 md:w-36" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex p-4 gap-5 font-semibold">
        <NavLink to="/" className="hover:text-blue-500">
          Home
        </NavLink>
        <NavLink to="/collection" className="hover:text-blue-500">
          Collection
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-500">
          About
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-500">
          Contact
        </NavLink>
      </div>

      {/* User and Cart Actions */}
      <div className="hidden md:flex p-4 gap-5">
        <button onClick={handleSearchbar} className="focus:outline-none">
          <Link to="/collection">
            <img
              src={assets.search_icon}
              alt="search"
              className="h-6 w-6 hover:scale-110 transition"
            />
          </Link>
        </button>
        {userDetails && userDetails.users ? (
          <div className="relative">
            <p
              className="cursor-pointer font-semibold"
              onClick={() => setShowLogout((prev) => !prev)}
            >
              {userDetails.users.displayName}
            </p>
            {showLogout && (
              <button
                onClick={handleLogout}
                className="absolute top-6 right-0 mt-2 p-2 bg-black text-white rounded-md"
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt="login"
              className="h-6 w-6 hover:scale-110 transition"
            />
          </Link>
        )}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="h-6 w-6 hover:scale-110 transition"
          />
          <p className="absolute -top-2 -right-2 bg-black text-white text-center text-xs rounded-xl px-1">
            {cartItems.length}
          </p>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none hover:text-blue-500 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-[40%] bg-white shadow-lg z-50 flex flex-col items-center gap-4 font-semibold py-4">
          <NavLink
            to="/"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <div className="flex gap-5">
            <button onClick={handleSearchbar} className="focus:outline-none">
              <img
                src={assets.search_icon}
                alt="search"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </button>
            <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
              <img
                src={assets.profile_icon}
                alt="login"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </NavLink>
            <NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>
              <img
                src={assets.cart_icon}
                alt="cart"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
