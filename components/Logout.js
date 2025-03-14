"use client";
import React from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Logout() {
  const { currentUser, logOut } = useAuth();
  const pathname = usePathname();
  console.log(pathname);

  if (!currentUser) {
    return null;
  }
  if (pathname === "/") {
    return (
      <Link href={"/dashboard"}>
        <Button text="Go to Dashboard" clickHandler={logOut} />
      </Link>
    );
  }
  return <Button text="Logout" clickHandler={logOut} />;
}
