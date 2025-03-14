import React from "react";

export default function Main(props) {
  const { children } = props;
  return <main className="flex-1 felx flex-col p-4 sm:p-8 ">{children}</main>;
}
