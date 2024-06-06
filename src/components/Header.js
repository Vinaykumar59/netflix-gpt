import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {LOGO, USER_AVATAR} from '../utils/constants'
const Header = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // cleanup- unsubscribe to onAuthstatechange
    return () => unsubscribe()
  }, []);

  return (
    <div className="absolute z-10 top-0 bg-gradient-to-b from-black w-full h-20  flex justify-between items-center px-4">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      {signeduser && (
        <div className="flex gap-6 items-center">
          <p className="text-white text-xl font-bold">{user.displayName}</p>
          <img src={USER_AVATAR} alt="avatar" className="w-8 h-8"/>
          <button
            className="rounded bg-slate-100 text-red-600 text-sm font-bold p-2 m-2"
            onClick={handleSignout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
