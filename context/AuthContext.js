"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataobj, setUserDataObj] = useState(null);
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    setUserDataObj({});
    setCurrentUser(null);
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        // Set user to local context state
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          console.log("No user found");
          return;
        }
        // If user exists, fetch data
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        console.log("fetching user data");
        let firebaseData = {};

        if (docSnap.exists()) {
          firebaseData = docSnap.data();
          console.log("found user data");
        }
        setUserDataObj(firebaseData);
      } catch (e) {
        console.log("Error ", e);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userDataobj,
    setUserDataObj,
    signUp,
    logOut,
    login,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
