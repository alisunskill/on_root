import React, { useState, useEffect } from "react";
import logo from "../public/images/logo.svg";
import men from "../public/Images/men.svg";
import plusicon from "../public/Images/plusicon.svg";
import earth from "../public/Images/earth.webp";
import logout from "../public/Images/logout.png";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchRecommendations } from "../store/actions/recommendationActions";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Globe from "./Globe";
const Navbar = () => {
  const router = useRouter();
  const [modalShow, setModalShow] = React.useState(false);
  const handleReload = () => {
    router.push("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("logout succesfully");
  };


// globe
const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const [searchTerm, setSearchTerm] = useState("");
  const { recommendations, loading, error } = recommendationsData;




















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
                <Button
                  className="bg-transparent border-0"
                  onClick={() => setModalShow(true)}
                >
                  {" "}
                  <Image
                    width={50}
                    height={50}
                    src={earth}
                    alt="earth"
                    style={{ objectFit: "contain" }}
                    className={`mx-4" ${styles.plusicon}`}
                  />
                </Button>
                {modalShow && (
                  <Globe show={modalShow} onHide={() => setModalShow(false)} data={recommendationsData} />
                )}

                <Link href="/createitinerary">
                  {" "}
                  <Image
                    width={50}
                    height={50}
                    src={plusicon}
                    alt="plusicon"
                    className={`mx-4 ${styles.plusicon}`}
                  />
                </Link>
                <Link href="/login">
                  <Image
                    width={50}
                    height={50}
                    src={men}
                    alt=""
                    className={`mx-3 ${styles.menicon}`}
                  />
                </Link>
                <Image
                  src={logout}
                  width={50}
                  height={50}
                  alt=""
                  onClick={handleLogout}
                  className={`mx-3 object-fit-contain cursor-pointer ${styles.menicon}`}
                />
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
