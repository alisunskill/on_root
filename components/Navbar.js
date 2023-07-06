import React from "react";
import logo from "../public/images/logo.svg";
import men from "../public/Images/men.svg";
import plusicon from "../public/Images/plusicon.svg";
import styles from "../styles/home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div>
        <header className="container-fluid">
          <div className={`row d-flex align-items-center ${styles.headerhero}`}>
            {/* logo */}
            <div
              className={`col-xl-3 col-lg-3 col-md-3 col-sm-3  d-flex justify-content-center ${styles.logo}`}
            >
              <Link href="/">
                <Image
                  width={270}
                  height={50}
                  className={styles.logoimage}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            {/* searchbar */}
            <div
              className={`col-xl-6 col-lg-6 col-md-6 col-sm-6  ${styles.inputgroup}`}
            >
              <input
                type="text"
                placeholder="Explore With Us....."
                aria-describedby="button-addon5"
                className={`form-control ${styles.searchvally}`}
              />
              <FontAwesomeIcon
                className={styles.inputgroupicon}
                icon={faSearch}
              />
            </div>
            {/* uploaes */}
            <div className="icons-right col-xl-3 col-lg-3 col-md-3 col-sm-3  d-flex justify-content-end align-items-center">
              <Image
                width={50}
                height={50}
                src={plusicon}
                alt="plusicon"
                className={`mx-4 ${styles.plusicon}`}
              />
              <Image
                width={50}
                height={50}
                src={men}
                alt=""
                className={`mx-3 ${styles.menicon}`}
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
