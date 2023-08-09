import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import newsletterimg from "../../public/images/card-two.svg";
import styles from "../../styles/viewsave.module.css";
import NewsLetter from "../../website/components/NewsLetter";
import PlaceFullSubCard from "../components/PlaceFullSubCard";
import Trip from "./components/Trip";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import axios from "axios";
import Link from "next/link";

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

function ViewSaves() {
  const [postIds, setPostIds] = useState([]);
  const [trigger, setTrigger] = useState(new Date());
  console.log(postIds, " postIds postIds");

  // const [showIcon, setShowIcon] = useState(true);
  // const [modalShow, setModalShow] = useState(false);
  // const [userId, setUserId] = useState(null);
  const fetchPostIds = async () => {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      console.error("User ID not available.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/api/savepost?userID=${userID}`
      );
      const data = response.data;
      const { savePosts } = data;

      setPostIds(savePosts);
      const postIdList = savePosts.map((post) => post.postId);
      console.log(postIdList, "postIdListpostIdListpostIdListpostIdList");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchPostIds();
  }, [trigger]);

  const handleRemove = async (postId) => {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      console.error("User ID not available.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8000/api/savepost/${postId}`, {
        headers: {
          Authorization: `Bearer ${userID}`,
        },
      });

      setPostIds((prevPostIds) => prevPostIds.filter((id) => id !== postId));

      setTrigger(new Date());
      console.log("Post deleted successfully.");
      // alert("Post deleted successfully.")
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row px-4">
          <h1 className="dark bold fw-700 pt-4 text-center mb-4">Your Saves</h1>

          <div className="col-lg-12">
            <InfiniteScroll
              className="w-100 overflow-hidden"
              dataLength={postIds.length}
              loader={<h4>Loading...</h4>}
            >
              <Box sx={{ minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                  {postIds.map((post, index) => (
                    <Link key={index} href={`/${post.postId}`}>
                      <div className="position-relative">
                        <button
                          className="bg-danger border-0 rounded-2 position-absolute z-3 px-3 fw-700"
                          style={{ right: "0px" }}
                          onClick={() => handleRemove(post.postId)}
                        >
                          x
                        </button>
                      </div>
                      <img
                        layout="fill"
                        objectFit="cover"
                        src={`${
                          itemData[index % itemData.length].img
                        }?w=162&auto=format`}
                        srcSet={`${
                          itemData[index % itemData.length].img
                        }?w=162&auto=format&dpr=2 2x`}
                        className={styles.placeImg}
                        loading="lazy"
                        style={{
                          display: "block",
                          width: "100%",
                          borderRadius: "15px",
                          opacity: "0.99990000999",
                        }}
                      />
                      <div>
                        <p className="w-700 text-dark"> {post.postId}</p>
                        <p className="w-700 text-dark"> {post.userID}</p>
                      </div>
                    </Link>
                  ))}
                </Masonry>
              </Box>
            </InfiniteScroll>
          </div>

          {/* <div className="col-lg-4 first-card position-relative">
            <div
              className={` d-flex flex-column justify-content-center align-items-center text-center  ${styles.yoursave_image1}`}
            >
              <div className="col-lg-12 yoursave_text">
                <FontAwesomeIcon
                  onClick={() => setModalShow(true)}
                  className={styles.plusicon}
                  icon={faPlus}
                />
                <div className="text-center w-100  d-flex justify-content-center align-items-center">
                  <Trip
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setModalShow={setModalShow}
                  />
                </div>{" "}
                <p className="letterspac">ITINERARY</p>
                <h3 className="landingeventheading"> Saved Activity 1 </h3>
                <p className="mb-0 fw-500">Paris, France</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12 col-md-12 pt-0 mt-0">
                <div
                  className={`row  d-flex justify-content-center align-items-center ${styles.landingendcard1}`}
                  style={{ background: "white" }}
                >
                  <Trip
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setModalShow={setModalShow}
                  />
                  {eventData1.map((item, index) => {
                    return (
                      <PlaceFullSubCard
                        key={index}
                        imageUrl={item.bgImg}
                        showIcon={showIcon}
                        itinerary={item.itinerary}
                        title={item.title}
                        place={item.place}
                        time={item.time}
                        setModalShow={setModalShow}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12 col-md-12 pt-0 mt-0">
                <div
                  className={`row  d-flex justify-content-center flex-column align-items-center ${styles.landingendcard1}`}
                  style={{ background: "white" }}
                >
                  <Trip show={modalShow} onHide={() => setModalShow(false)} />
                  {eventData.map((item, index) => {
                    return (
                      <PlaceFullSubCard
                        key={index}
                        imageUrl={item.bgImg}
                        showIcon={showIcon}
                        itinerary={item.itinerary}
                        title={item.title}
                        place={item.place}
                        time={item.time}
                        setModalShow={setModalShow}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 first-card">
                <div className={styles.yoursave_image1}>
                  <div
                    className={`col-lg-12 position-relative d-flex flex-column justify-content-center align-items-center text-center  ${styles.yoursave_text}`}
                  >
                    <FontAwesomeIcon
                      onClick={() => setModalShow(true)}
                      className={styles.plusicon2}
                      icon={faPlus}
                    />
                    <Trip show={modalShow} onHide={() => setModalShow(false)} />
                    <p className="fw-500 ltr-shrt-spec">ITINERARY</p>
                    <h3 className="landingeventheading"> Saved Activity 1 </h3>
                    <p className="mb-0 fw-500">Paris, France</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  className={`row  d-flex justify-content-center flex-column align-items-center ${styles.landingendcard1}`}
                  style={{ background: "white" }}
                >
                  {eventData2.map((item, index) => {
                    return (
                      <PlaceFullSubCard
                        key={index}
                        imageUrl={item.bgImg}
                        showIcon={showIcon}
                        itinerary={item.itinerary}
                        title={item.title}
                        place={item.place}
                        time={item.time}
                        setModalShow={setModalShow}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div>
        <NewsLetter
          newsletterimg={newsletterimg}
          heading={"Subscribe to our Newsletter"}
          title={"Get Special Offers and more from Traveller"}
          para={
            "Subscribe to see secret deals prices drop the moment you sign up!"
          }
        />
      </div>
      <br />
    </>
  );
}

export default ViewSaves;
