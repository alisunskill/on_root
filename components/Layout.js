import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import { Navbar1 } from "../website/components/Navbar1";

export default function Layout({ children }) {
  const [show, setShow] = useState(1);
  return (
    <div>
      {/* {show == 1 ? <Navbar1 /> : <Navbar1 />} */}
      <Navbar />
      <main show={show}> {children}</main>
      <Footer />
    </div>
  );
}
