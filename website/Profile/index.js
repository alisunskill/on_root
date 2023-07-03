import React, { useState } from "react";
import styles from "../../styles/profile.module.css";
import globe2 from "../../public/images/globe2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import imageUrl from "../../public/images/add.svg";
import Link from "next/link";

const data = [
  {
    id: 1,
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "Istanbul, Turkey    ",
    address: "$500",
  },
  {
    id: 2,
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "Thailand, Pattaya",
    address: "$400",
  },
  {
    id: 3,
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "",
    address: "$400",
  },
];

function Profile() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [clickedImages, setClickedImages] = useState([]);

  const handleFavoriteClick = (e) => {
    const showData = data.filter((items) => {
      items.id === e;
    });
    console.log(e, "alll");
    setIsFavorite(showData);
  };
  const handleImageClick = () => {
    if (!clickedImages.includes(imageUrl)) {
      setClickedImages([...clickedImages, imageUrl]);
      console.log(clickedImages, "ali");
    }
  };
  return (
    <>
      <div className="container-fluid pb-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <Image className={styles.profile_globe3d} src={globe2} alt="" />
            </div>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-12 col-md-4 col-lg-4 text-center justify-content-center d-flex">
          <Link
                  href="/upcomingtrips"
                  className="text-decoration-none text-light"
                >
            <button
              href="#"
              className={`d-flex align-items-center justify-content-center d-flex  ${styles.profilebutton}`}
            >
              <h6 className="mb-0">
                
                  Upcoming Trips

              </h6>
              <FontAwesomeIcon className={styles.profileplus} icon={faPlus} />
            </button>
            </Link>
          </div>
          <div className="col-12 col-md-4 col-lg-4 text-center justify-content-center d-flex">
            <Link
              href="/recommendation"
              className="text-decoration-none text-light"
            >
              <button
                href="#"
                className={`text-center d-flex align-items-center justify-content-between px-4 d-flex ${styles.profilebutton} ${styles.reccommendbtn}`}
              >
                Your Recommendtions
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-4 col-lg-4 text-center">
            <Link href="/viewsave" className="text-decoration-none text-light">
              <button
                href="#"
                className={`text-center d-flex align-items-center justify-content-between px-4 d-flex ${styles.profilebutton} ${styles.heartbtn}`}
              >
                <h6 className="mb-0">Saves</h6>
                <FontAwesomeIcon
                  className={styles.profileheart}
                  icon={faHeart}
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.profilefitimage}>
          <div className={styles.profilesection2image}>
            <div className={styles.profileimagetitle}>
              <h1 className="text-light">Adventure Begins Here</h1>
              <p className={`text-light ${styles.profilesubheading}`}>
                Choose from thousands of organized adventures
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-5">
          <h1>Onroot Spotlight</h1>
          <p className="pt-3">
            Find out what’s happening at Onroot: from our special offers.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div
              className={`row px-4 d-flex justify-content-center align-items-center ${styles.landingendcard1}`}
            >
              {data.map((item, id) => {
                return (
                  <>
                    <div
                      className="col-12 col-md-6 col-lg-4 p-3 position-relative"
                      key={id}
                      onClick={handleImageClick}
                    >
                      <div>
                        <img className={styles.placeImg} src={item.bgImg} />
                        <h6
                          className={`fw-500 mb-0 mt-3 ${styles.landingeventheading}`}
                        >
                          {item.city} <br />
                        </h6>
                        {item.address ? (
                          <div className="d-flex align-center gap-2 pt-2">
                            <h6>Starting from </h6>{" "}
                            <h6 className={styles.landingeventheading}>
                              {item.address}
                            </h6>{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div
                        className={`d-flex justify-content-center align-items-center ${styles.fvbtnhero}`}
                      >
                        <div
                          onClick={() => handleFavoriteClick(item.id)}
                          className={styles.fvbtn}
                        >
                          {console.log(item.id, id, "llll")}
                          {isFavorite && item === item.id ? (
                            <FontAwesomeIcon
                              icon={faHeart}
                              style={{ color: "red" }}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faHeart}
                              style={{ color: "gray" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
