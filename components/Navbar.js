import React from "react";
import logo from "../public/images/logo.svg";
import men from "../public/Images/men.svg";
import plusicon from "../public/Images/plusicon.svg";
import styles from "../styles/home.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div>
        <header className="container-fluid">
          <div className={`row d-flex align-items-center ${styles.headerhero}`}>
            {/* logo */}
            <div
              className={` col-lg-3 d-flex justify-content-start ${styles.logo}`}
            >
              <Image
                width={270}
                height={50}
                className={styles.logoimage}
                src={logo}
                alt="logo"
              />
            </div>
            {/* searchbar */}
            <div className="searchbar col-lg-6">

              <div className={styles.inputgroup}>
                <input
                  type="text"
                  placeholder="Explore With Us....."
                  aria-describedby="button-addon5"
                  className={`form-control ${styles.searchvally}`}
                />
                <div className="input-group-append">
                  <button
                    id="button-addon5"
                    type="submit"
                    className={`btn ${styles.searchbtn}`}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* uploaes */}
            <div className="icons-right col-lg-3 d-flex justify-content-end align-items-center">
              <Image
                width={50}
                height={50}
                src={plusicon}
                alt="plusicon"
                className="mx-4"
              />
              <Image
                width={50}
                height={50}
                className="men-img mx-3"
                src={men}
                alt=""
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
