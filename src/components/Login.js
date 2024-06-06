// rafce - react arrow function export constany
import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { validate } from "../utils/ValidateForm";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const Email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleForm = () => {
    const formValid = validate(Email.current.value, password.current.value);
    setErrorMessage(formValid);

    if (errorMessage) return;

    if (!isSignInForm) {
      //signup logic for a new user
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;

            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL : photoURL
            }))

          }).catch((error) => {
            // An error occurred
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
  
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic for existing user
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('user logged in', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/4 left-1/3 flex flex-col gap-2 p-3 bg-black bg-opacity-75 text-white"
      >
        <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 border rounded-sm border-black bg-gray-700"
          />
        )}
        <input
          ref={Email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 border rounded-sm border-black bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 rounded-sm border-black bg-gray-700"
        />
        {errorMessage && (
          <p className="text-red-700 text-lg p-2 font-bold">{errorMessage}</p>
        )}
        <button
          className="p-2 m-2 rounded-sm border-black bg-red-600"
          onClick={handleForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm cursor-pointer" onClick={toggleSignForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
