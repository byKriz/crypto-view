import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <form>
          <div>
            <label>Email</label>
            <div>
              <input type="email" placeholder="Your email" />
              <AiOutlineMail />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="password" placeholder="Your password" />
              <AiFillLock />
            </div>
          </div>
          <button>Sign in</button>
        </form>
        <p>
          Don't have a account? 
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
