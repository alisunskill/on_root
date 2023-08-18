import React, { useEffect, useState } from "react";
import styles from "../../styles/profile.module.css";
import globe2 from "../../public/images/globe2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  fetchFavPosts,
  fetchRecommendations,
} from "../../store/actions/recommendationActions";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import Globe from "./Globe";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1663583784667-4a2a386fec62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1622397815608-359540676c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1550850839-8dc894ed385a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1587162146766-e06b1189b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=956&q=80",
  },
];

function Profile() {
  // fetch recommendation
  const router = useRouter();
  const dispatch = useDispatch();

  const recommendationsData = useSelector((state) => state.recommendation);
  const { recommendations, loading, error } = recommendationsData;
  console.log(recommendations, "recommendations");
  const [selectedItems, setSelectedItems] = useState({});
  const [favList, setFavList] = useState([]);
  const recData = recommendations.Recommendations;
  const [fullList, setFullList] = useState([]);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleShowAllClick = () => {
    setShowAllImages(!showAllImages);
  };
  const handleFavoriteClick = (id) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: !prevSelectedItems[id],
    }));

    const isAlreadyFav = favList.some((favItem) => favItem._id === id);
    if (isAlreadyFav) {
      const updatedFavList = favList.filter((item) => item._id !== id);
      setFavList(updatedFavList);
      alert("This post is removed from your favorites.");
      return;
    }

    const clickedItem = fullList.find((item) => item._id === id);
    if (clickedItem) {
      const updatedFavList = [clickedItem];
      setFavList(updatedFavList);
      localStorage.setItem(
        "selectedIds",
        JSON.stringify(updatedFavList.map((item) => item._id))
      );
    }
  };

  const sendFavListToBackend = async (selectedIds) => {
    const userID = localStorage.getItem("userID");
    console.log(userID, "userID");

    try {
      const response = await axios.post("http://localhost:8000/api/savepost", {
        postId: selectedIds,
        userID: userID,
      });

      console.log("Updated backend with new favList:", response.data);
    } catch (error) {
      console.error("Error updating backend:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  useEffect(() => {
    if (recData && Array.isArray(recData)) {
      setFullList(recData);
    }
  }, [recData]);

  useEffect(() => {
    const selectedIds = favList.map((item) => item._id);
    sendFavListToBackend(selectedIds);
  }, [favList]);

  return (
    <>
      <div className="container-fluid pb-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-5">
              {/* <Image className={styles.profile_globe3d} src={globe2} alt="" /> */}
              <Globe data={recData} />
            </div>
          </div>
        </div>

        <div className="row py-5 mt-4">
          <div className="col-12 col-md-4 col-lg-4 text-center justify-content-center d-flex">
            <Link
              href="/upcomingtrips"
              className="text-decoration-none text-light"
            >
              <button
                href="#"
                className={`d-flex align-items-center justify-content-center d-flex  ${styles.profilebutton}`}
              >
                <h6 className="mb-0">Upcoming Trips</h6>
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
              {fullList.slice(0, 3).map((item, index) => {
                const isAlreadyFav = favList.some(
                  (favItem) => favItem._id === item._id
                );

                return (
                  <>
                    <div
                      className="col-12 col-md-6 col-lg-4 p-3 position-relative"
                      onClick={() => handleFavoriteClick(item._id)}
                      key={index}
                    >
                      <div className="position-relative">
                        <img
                          layout="fill"
                          objectFit="cover"
                          src={`${
                            itemData[index % itemData.length].img
                          }?w=162&auto=format`}
                          srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                          className={styles.placeImg}
                          loading="lazy"
                          style={{
                            display: "block",
                            width: "100%",
                            borderRadius: "15px",
                            opacity: "0.99990000999",
                          }}
                        />
                        <h6
                          className={`fw-500 mb-0 mt-3 ${styles.landingeventheading}`}
                        >
                          {item?.title} <br />
                        </h6>
                      </div>
                      <div
                        className={`d-flex justify-content-center align-items-center ${styles.fvbtnhero}`}
                      >
                        <div className={styles.fvbtn}>
                          <FontAwesomeIcon
                            icon={faHeart}
                            // style={{ color: isAlreadyFav ? "red" : "gray" }}
                            style={{
                              color: selectedItems[item._id] ? "red" : "gray",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                      <p className="text-center position-relative z-5">
                        {item._id}
                      </p>
                    </div>
                  </>
                );
              })}

              <div className="text-center">
                <button className="savebtn" onClick={handleShowAllClick}>
                  {showAllImages ? "Close All" : "Show All"}
                </button>
              </div>
              {showAllImages && (
                <div
                  className={`row px-4 d-flex justify-content-center align-items-center ${styles.landingendcard1}`}
                >
                  {fullList.slice(3).map((item, index) => {
                    const isAlreadyFav = favList.some(
                      (favItem) => favItem._id === item._id
                    );

                    return (
                      <>
                        <div
                          className="col-12 col-md-6 col-lg-4 p-3 position-relative"
                          onClick={() => handleFavoriteClick(item._id)}
                          key={index}
                        >
                          <div className="position-relative">
                            <img
                              layout="fill"
                              objectFit="cover"
                              src={`${
                                itemData[index % itemData.length].img
                              }?w=162&auto=format`}
                              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                              className={styles.placeImg}
                              loading="lazy"
                              style={{
                                display: "block",
                                width: "100%",
                                borderRadius: "15px",
                                opacity: "0.99990000999",
                              }}
                            />
                            <h6
                              className={`fw-500 mb-0 mt-3 ${styles.landingeventheading}`}
                            >
                              {item?.title} <br />
                            </h6>
                          </div>
                          <div
                            className={`d-flex justify-content-center align-items-center ${styles.fvbtnhero}`}
                          >
                            <div className={styles.fvbtn}>
                              <FontAwesomeIcon
                                icon={faHeart}
                                // style={{ color: isAlreadyFav ? "red" : "gray" }}
                                style={{
                                  color: selectedItems[item._id]
                                    ? "red"
                                    : "gray",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                          </div>
                          <p className="text-center position-relative z-5">
                            {item._id}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
