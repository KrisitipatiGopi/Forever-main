import React, { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/")
              name.current.value = "";
              email.current.value = "";
              password.current.value = "";
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/")
          email.current.value = "";
          password.current.value = "";
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] bg-white">
      <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <hr className="bg-white mt-2 mb-2" />
        <form>
          {!isSignIn && (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-white font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                ref={name}
                id="username"
                placeholder="Enter Username"
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              {errorMessage}
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white font-medium mb-2"
            >
              Password
              {errorMessage}
            </label>
            <input
              type="password"
              id="password"
              ref={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full font-semibold bg-white text-black mt-3 py-2 px-4 rounded-lg hover:bg-white hover:text-black border border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            onClick={handleSubmit}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mt-4 text-center">
            {isSignIn ? "Don't have an Account?" : "Already Have an Account?"}
            <span
              className="font-bold text-lg cursor-pointer"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? " Sign Up" : " Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
