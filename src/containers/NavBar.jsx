import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>CryptoTrending</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};
