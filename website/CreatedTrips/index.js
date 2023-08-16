import React, { useState, useEffect } from "react";
import newsletterimg from "../../public/images/card-two.svg";
import styles from "../../styles/viewsave.module.css";
import NewsLetter from "../components/NewsLetter";
// import Trip from "./components/Trip";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function ItiniraryDetail() {
  const router = useRouter();
  const { id: singletripId } = router.query;
  console.log(singletripId, "id");
  const [showIcon, setShowIcon] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  // const [userId, setUserId] = useState(null);

  // all trips
  const [trips, setTrips] = useState([]);
  const [singleTrips, setSingleTrips] = useState([]);
  console.log(singleTrips, "singleTrips");
  const [updateTrip, setUpdateTrip] = useState({
    id: null,
    image: "",
    title: "",
    region: "",
    sdate: "",
    edate: "",
  });
  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/trips");
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };
  const fetchSingleTrips = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/trips/${singletripId}`
      );
      setSingleTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  useEffect(() => {
    if (singletripId) {
      fetchSingleTrips();
    }
  }, [singletripId]);

  const handleRemoveTrips = async (tripId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/trips/${tripId}`
      );
      console.log(response.data);
      fetchTrips();
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };
  const updateTripEditHandle = (trip) => {
    setUpdateTrip({
      id: trip._id,
      image: trip.image,
      title: trip.title,
      region: trip.region,
      sdate: trip.sdate,
      edate: trip.edate,
    });
  };

  const handleUpdateSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/trips/${updateTrip.id}`,
        {
          image: updateTrip.image,
          title: updateTrip.title,
          region: updateTrip.region,
          sdate: updateTrip.sdate,
          edate: updateTrip.edate,
        }
      );
      console.log(response.data);
      setUpdateTrip({
        id: null,
        image: "",
        title: "",
        region: "",
        sdate: "",
        edate: "",
      });
      fetchTrips();
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row px-4">
          <h1 className="dark bold fw-700 pt-4 text-center mb-4">
            Your Itinerary Posts
          </h1>

          <div className="col-lg-12">
            <InfiniteScroll
              className="w-100 overflow-hidden"
              dataLength={trips.length}
              loader={<h4>Loading...</h4>}
            >
              <Box sx={{ minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                  {trips.map((trip, index) => (
                    <div>
                      <div className="position-relative" key={trip._id}>
                        <button
                          className="bg-danger border-0 rounded-2 position-absolute z-3 px-3 fw-700"
                          style={{ right: "0px" }}
                          onClick={() => handleRemoveTrips(trip._id)}
                        >
                          x
                        </button>
                      </div>
                      <Link key={index} href={`/trip/${trip._id}`}>
                        <img
                          src={trip.image}
                          alt="tripImg"
                          className={styles.placeImg}
                          loading="lazy"
                          style={{
                            display: "block",
                            width: "100%",
                            borderRadius: "15px",
                            opacity: "0.99990000999",
                          }}
                        />
                      </Link>

                      <div className="d-flex justify-content-between mt-2">
                        <h4 className="w-700 mb-0 text-dark">
                          Title: {trip.title}
                        </h4>
                        <button
                          className="bg-success text-light border-0 rounded-2 px-2 mx-2"
                          onClick={() => updateTripEditHandle(trip)}
                        >
                          Edit Trip
                        </button>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <h4 className="w-700 mb-0 text-dark">
                          region: {trip.region}
                        </h4>{" "}
                        <br />
                        <h4 className="w-700 mb-0 text-dark">
                          Start Date: {trip.sdate}
                        </h4>
                        <h4 className="w-700 mb-0 text-dark">
                          End Date: {trip.edate}
                        </h4>
                      </div>

                      {updateTrip.id === trip._id && (
                        <div>
                          <input
                            type="text"
                            value={updateTrip.title}
                            onChange={(e) =>
                              setUpdateTrip({
                                ...updateTrip,
                                title: e.target.value,
                              })
                            }
                            placeholder="Title"
                          />
                          <input
                            type="text"
                            value={updateTrip.region}
                            onChange={(e) =>
                              setUpdateTrip({
                                ...updateTrip,
                                region: e.target.value,
                              })
                            }
                            placeholder="region"
                          />
                          <input
                            type="text"
                            value={updateTrip.sdate}
                            onChange={(e) =>
                              setUpdateTrip({
                                ...updateTrip,
                                sdate: e.target.value,
                              })
                            }
                            placeholder="Start Date"
                          />
                          <input
                            type="text"
                            value={updateTrip.edate}
                            onChange={(e) =>
                              setUpdateTrip({
                                ...updateTrip,
                                edate: e.target.value,
                              })
                            }
                            placeholder="End Date"
                          />
                          <button
                            onClick={handleUpdateSubmit}
                            className="bg-success rounded-2 border-0"
                          >
                            Update
                          </button>
                        </div>
                      )}
                    </div>
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

export default ItiniraryDetail;
