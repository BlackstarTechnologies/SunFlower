import "@styles/globals.css";
// import Nav from "@components/Nav";
// import Provider from "@components/Provider";
import React from "react";

export const metadata = {
  title: "SunFlower",
  description: "Make your money work for you",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
