import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [show, setShow] = useState(1);
  return (
    <div>
      {/* <Navbar /> */}
      <main show={show}> {children}</main>
      <Footer />
    </div>
  );
}
