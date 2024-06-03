import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const signeduser = useSelector((store) => store?.user);
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute  bg-gradient-to-b from-black w-screen h-20  flex justify-between items-center px-4">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {signeduser && (
        <div className="flex gap-6 items-center">
          <p className="text-white text-xl font-bold">{user.displayName}</p>
          <button className="rounded bg-slate-100 text-red-600 text-sm font-bold p-2 m-2" onClick={handleSignout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
