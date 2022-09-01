import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate("/");
  const handleNav = () => setNav(!nav);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <nav className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">CryptoTrending</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* <div className="hidden md:block">
        <Link to="/signin" className="p-4 hover:text-accent">
          Sing In
        </Link>
        <Link
          to="/signup"
          className=" bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
        >
          Sing Up
        </Link>
      </div> */}

      {user?.email ? (
        <div className="hidden md:block">
          <Link to="/account" className="p-4 hover:text-accent">
            Account
          </Link>
          <button onClick={handleSignOut} className="p-4 hover:text-red-500">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to="/signin" className="p-4 hover:text-accent">
            Sing In
          </Link>
          <Link
            to="/signup"
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sing Up
          </Link>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {!nav ? (
          <AiOutlineMenu className=" text-xl" />
        ) : (
          <AiOutlineClose className=" text-xl" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          {user?.email ? (
            <li onClick={handleNav} className="border-b py-6">
              <Link to="/">Account</Link>
            </li>
          ) : null}
          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>
        {user?.email ? (
          <div className="flex flex-col w-full p-4">
            <button
              onClick={handleSignOut}
              className="w-full my-2 p-3 border border-secondary rounded-2xl shadow-xl bg-red-500 text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full p-4">
            <Link to="/signin" onClick={handleNav}>
              <button className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl">
                Sing In
              </button>
            </Link>
            <Link to="/signup" onClick={handleNav}>
              <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
                Sing Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
