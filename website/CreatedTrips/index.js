import React, { useState, useEffect } from "react";
import { fetchSingleTrip } from "../../store/actions/singleTripAction";
import {
  updateTripAction,
  removeTripAction,
} from "../../store/actions/updateTripAction";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/viewsave.module.css";
// import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import Link from "next/link";
import {
  fetchGetTrips,
  fetchSavedTrips,
} from "../../store/actions/tripsAction";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ItiniraryDetail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const { recommendations, loading, error } = recommendationsData;

  const recData = recommendations.Recommendations;
  const [tripIds, setTripIds] = useState(new Set());
  const [singleTrips, setSingleTrips] = useState(null);
  const saveTripsData = useSelector((state) => state.tripIdSave.savetrips);
  const tripIdData = useSelector((state) => state?.tripIdSave.savedTripsId);
  const savedTripIds = tripIdData?.tripsPosts?.map((trip) => trip.tripId) || [];
  const savedTripsData = useSelector((state) => state.tripIdSave.savetrips);
  const singleTrip = useSelector((state) => state.singleTrip.singleTrip);
  const [editModalShow, setEditModalShow] = useState(false);
  const [postid, setPostId] = useState("");

  useEffect(() => {
    const selectedIdsFromLocalStorage = localStorage.getItem("filterPostId");
    if (selectedIdsFromLocalStorage) {
      setPostId(selectedIdsFromLocalStorage);
    }
  }, []);

  // const filteredData = recData?.find((item) => item._id === postid);

  // console.log(filteredData, "image");

  const { id: singletripId } = router.query;

  useEffect(() => {
    if (singletripId) {
      dispatch(fetchSingleTrip(singletripId));
    }
  }, [dispatch, singletripId]);

  useEffect(() => {
    if (singleTrip) {
      setSingleTrips([singleTrip]);
    }
  }, [singleTrip]);

  useEffect(() => {
    dispatch(fetchGetTrips());
    dispatch(fetchSavedTrips());
  }, [dispatch]);

  useEffect(() => {
    fetchTripsIds();
  }, []);

  const fetchTripsIds = async () => {
    // Use the correct data to set the tripIds
    setTripIds(new Set(savedTripIds));
  };

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(saveTripsData);
  }, [saveTripsData]);

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
    setTrips(saveTripsData);
  };

  const handleRemoveTrips = async (tripId) => {
    try {
      await dispatch(removeTripAction(tripId));
      console.log("Trip removed successfully!");
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
    setEditModalShow(true);
  };

  const handleUpdateSubmit = async (editedTrip) => {
    try {
      await dispatch(updateTripAction(editedTrip));
      console.log("Trip updated successfully!");
      setUpdateTrip({
        id: null,
        image: "",
        title: "",
        region: "",
        sdate: "",
        edate: "",
      });
      fetchTrips();
      setEditModalShow(false);
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row px-4">
          <h1 className="dark bold fw-700 pt-4 text-center mb-4">
            Your Created Trips
          </h1>

          <div className="col-lg-12">
            <InfiniteScroll
              className="w-100 overflow-hidden"
              dataLength={trips.length}
              loader={<h4>Loading...</h4>}
            >
              <Box sx={{ minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                  {trips.length > 0 ? (
                    <>
                      {trips.map((trip, index) => {
                        const filteredData = recData?.find(
                          (item) => item._id === trip._id
                        );
                        return (
                          <div key={trip._id}>
                            <div
                              className={`text-decoration-none d-flex justify-content-center flex-column ${styles.savelink}`}
                            >
                              <img
                                className={styles.uploadimg}
                                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Loire_Indre_Tours1_tango7174.jpg" // Replace with your default image URL
                                alt="Uploaded Image"
                              />

                              <FontAwesomeIcon
                                icon={faTimes}
                                className={`bg-light border-0 rounded-5 text-dark position-absolute z-3 p-2 fw-700 animated cursor-pointer ${styles.crossed}`}
                                onClick={() => handleRemoveTrips(trip._id)}
                              />

                              <div
                                style={{ position: "absolute ", zIndex: 999 }}
                              >
                                <div className="text-center">
                                  <p className={`mb-0 letterspac text-white`}>
                                    Event
                                  </p>
                                  <h3 className="w-700 text-white">
                                    {" "}
                                    {trip.title}
                                  </h3>
                                  <p className={`mb-0 m1 text-white`}>
                                    {" "}
                                    {trip.region}
                                  </p>
                                  <button
                                    className="savebtn text-light border-0 rounded-2 px-2 f-16"
                                    onClick={() => updateTripEditHandle(trip)}
                                  >
                                    Edit Trip
                                  </button>
                                </div>
                              </div>
                            </div>

                            
                            {updateTrip.id && (
                              <EditTripModal
                                show={editModalShow}
                                onHide={() => setEditModalShow(false)}
                                updateTrip={updateTrip}
                                handleUpdateSubmit={handleUpdateSubmit}
                              />
                            )}
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  )}
                </Masonry>
              </Box>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItiniraryDetail;

function EditTripModal({ show, onHide, updateTrip, handleUpdateSubmit }) {
  const [editedTrip, setEditedTrip] = useState(updateTrip);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTrip({ ...editedTrip, [name]: value });
  };

  return (
    <Modal size="md" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-600 d-flex justify-content-center">
          Edit Trip
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.edittrips}>
        <Form>
          <Form.Group controlId="title">
            <Form.Label className="pt-3 fw-600 px-1">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editedTrip.title || ""}
              onChange={handleInputChange}
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group controlId="region">
            <Form.Label className="pt-3 fw-600 px-1">Region</Form.Label>
            <Form.Control
              type="text"
              name="region"
              value={editedTrip.region || ""}
              onChange={handleInputChange}
              placeholder="Region"
            />
          </Form.Group>

          <Form.Group controlId="sdate">
            <Form.Label className="pt-3 fw-600 px-1">Start Date</Form.Label>
            <Form.Control
              type="text"
              name="sdate"
              value={editedTrip.sdate || ""}
              onChange={handleInputChange}
              placeholder="Start Date"
            />
          </Form.Group>

          <Form.Group controlId="edate">
            <Form.Label className="pt-3 fw-600 px-1">End Date</Form.Label>
            <Form.Control
              type="text"
              name="edate"
              value={editedTrip.edate || ""}
              onChange={handleInputChange}
              placeholder="End Date"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center pb-3">
        <Button
          className="savebtn1 px-4 w-100 rounded-4 "
          onClick={() => {
            handleUpdateSubmit(editedTrip);
            onHide();
          }}
        >
          Finish
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
