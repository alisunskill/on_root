import React, { useState, useEffect } from "react";
import logo from "../public/images/logo.svg";
import men from "../public/Images/men.svg";
import plusicon from "../public/Images/plusicon.svg";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import axios from "axios";
import { connect } from "react-redux";
import { fetchRecommendations } from "../store/actions/recommendationActions";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const handleReload = () => {
    router.push("/"); // Reload the page
  };

  return (
    <>
      <div>
        <header className="container-fluid">
          <div
            className={`row d-flex align-items-center position-relative ${styles.headerhero}`}
          >
            <div
              className={`col-xl-6 col-lg-6 col-md-6 col-sm-6  d-flex justify-content-start ${styles.logo}`}
            >
              {/* logo */}
              <Link href="/" className="mx-3">
                <Image
                  onClick={handleReload}
                  width={270}
                  height={50}
                  className={styles.logoimage}
                  src={logo}
                  alt="logo"
                />
              </Link>
              {/* uploaes */}
              <div
                className={`icons-right col-xl-3 col-lg-3 col-md-3 col-sm-3 position-absolute d-flex justify-content-end align-items-center ${styles.right_box}`}
              >
                <Link href="/login">
                  {" "}
                  <Image
                    width={50}
                    height={50}
                    src={plusicon}
                    alt="plusicon"
                    className={`mx-4 ${styles.plusicon}`}
                  />
                </Link>
                <Link href="/signup">
                  <Image
                    width={50}
                    height={50}
                    src={men}
                    alt=""
                    className={`mx-3 ${styles.menicon}`}
                  />
                </Link>
              </div>
            </div>
            {/* searchbar */}
            <div className="mr-5 d-flex w-100 justify-content-center">
              <Searchbar />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

// export default Navbar;
const mapStateToProps = (state) => ({
  recommendations: state.recommendation.recommendations,
  loading: state.recommendation.loading,
  error: state.recommendation.error,
});

const mapDispatchToProps = {
  fetchRecommendations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
