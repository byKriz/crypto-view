import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>API Status</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h2>Info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Invest</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <ThemeToggle />
              </div>
              <p>Sign Up for crypto news</p>
              <div>
                <form>
                  <input type="email" placeholder="Enter your email" />
                  <button>Sign Up</button>
                </form>
              </div>
              <div>
                <AiOutlineInstagram />
                <FaFacebook />
                <FaTiktok />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </footer>
  );
};
