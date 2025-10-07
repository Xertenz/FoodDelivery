import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.scss";

export default function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("login");

  return (
    <div className="login-popup absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
      <form className="login-popup-container bg-white p-6 rounded-md w-[380px] max-w-[380px]">
        <div className="login-popup-title flex justify-between items-center mb-6">
          <h2 className="font-bold capitalize text-xl">{currState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
            className="cursor-pointer p-1 border border-transparent hover:border-orange-400 rounded transition-colors"
          />
        </div>
        <div className="login-popup-inputs mb-1">
          {currState == "signup" && (
            <>
              <input type="text" placeholder="Username" required />
              <br />
            </>
          )}
          <input type="email" placeholder="Email" required /> <br />
          <input type="password" placeholder="Password" required /> <br />
        </div>
        <button className="bg-orange-400 w-full text-white py-3 rounded cursor-pointer hover:bg-orange-500 transition-colors">
          {currState == "signup" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start gap-3 my-3">
          <input type="checkbox" required id="agree" className="mt-1.5" />
          <label htmlFor="agree">
            <p className="cursor-pointer">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </label>
        </div>
        {currState == "login" ? (
          <p>
            Create a new account?
            <span
              onClick={() => setCurrState("signup")}
              className="text-blue-500 cursor-pointer"
            >
              {" "}
              Click here{" "}
            </span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span
              onClick={() => setCurrState("login")}
              className="text-blue-500 cursor-pointer"
            >
              {" "}
              Login here{" "}
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
