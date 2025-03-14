"use client";
import { Fugaz_One } from "next/font/google";
import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

const Fugaz_Onec = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const { signUp, login } = useAuth();
  console.log(signUp);
  async function handleSubmit() {
    if (!email || !password || password.length < 6) {
      return;
    }
    setAuthenticating(true);
    try {
      if (isRegister) {
        console.log("Signing up a new user");
        await signUp(email, password);
      } else {
        console.log("Logging in existing users");
        await login(email, password);
      }
    } catch (err) {
      console.error("Error:", err.message);
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4 ">
      <h3
        className={"text-4xl sm:text-5xl md:text-6xl " + Fugaz_Onec.className}
      >
        {isRegister ? "Register" : "Log In"}
      </h3>
      <p>You're one step away!</p>
      <input
        className="w-full max-w-[400px] px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600 focus:border-indigo-600 "
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="w-full max-w-[400px] px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600 focus:border-indigo-600  "
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="max-w-[400px] w-full mx-auto">
        {" "}
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          full
        />
      </div>
      <p className="text-center">
        {isRegister ? "Already have an account" : "Dont have an account "}{" "}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-indigo-600"
        >
          {isRegister ? "Sign In" : " Sign Up"}
        </button>
      </p>
    </div>
  );
}
