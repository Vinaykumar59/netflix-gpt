// rafce - react arrow function export constany
import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative ">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg"
          alt="form"
        />
      </div>
      <form className="absolute top-1/4 left-1/3 flex flex-col gap-2 p-3 bg-black bg-opacity-75 text-white">
       <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       { !isSignInForm &&
                <input type="text" placeholder="Full Name" className="p-2 m-2 border rounded-sm border-black bg-gray-700"/>

       }
        <input type="text" placeholder="Email" className="p-2 m-2 border rounded-sm border-black bg-gray-700"/>
        <input type="text" placeholder="Password" className="p-2 m-2 rounded-sm border-black bg-gray-700"/>
        <button type="submit" className="p-2 m-2 rounded-sm border-black bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-sm cursor-pointer" onClick={toggleSignForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
