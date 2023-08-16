import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/viewsave.module.css";
import NewTrip from "./NewTrip";
import axios from "axios";

export default function Trip(props, setModalShow) {
  const [modalTrip, setModalTrip] = React.useState(false);
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetchTrips();
  }, []);
  const handleClick = () => {
    setModalTrip(true);
    // setModalShow(false)
  };
  const fetchTrips = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/trips");
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

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

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{ padding: "20px 40px", border: "none" }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`text-center w-100 ${styles.thumbnail}`}
          >
            Save Trip
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "20px 40px 40px 40px" }}>
          {trips.length === 0 || trips === undefined ? (
            <h4>No Trips </h4>
          ) : (
            <div>
              {trips.map((item) => {
                return (
                  <div
                    key={item._id}
                    className={`form-check d-flex align-items-center justify-content-between  gap-3 ${styles.herosaves}`}
                  >
                    <div>
                      <input
                        className={`form-check-input ${styles.radiobtn}`}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label fw-500 h4 text-dark"
                        for="exampleRadios1"
                      >
                        Trip to {item.title}
                      </label>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveTrips(item._id)}
                        className="bg-transparent border-0 text-dark"
                        style={{ fontSize: "25px" }}
                      >
                        x
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* <div
            className={`form-check d-flex align-center gap-3 mt3 ${styles.herosaves}`}
          >
            <input
              className={`form-check-input ${styles.radiobtn}`}
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label
              className="form-check-label fw-500 h4 text-dark"
              for="exampleRadios1"
            >
              Trip to “AFRICA”
            </label>
          </div>

          <div
            className={`form-check d-flex align-center gap-3 mt3 ${styles.herosaves}`}
          >
            <input
              className={`form-check-input ${styles.radiobtn}`}
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label
              className="form-check-label fw-500 h4 text-dark"
              for="exampleRadios1"
            >
              Trip to “EUROPE”
            </label>
          </div> */}
          <button
            className={`fw-500 ${styles.herobtn}`}
            onClick={handleClick}
            // onHide={() => setModalShow(false)}
          >
            + New Trip
          </button>
        </Modal.Body>
      </Modal>
      {/* New Trip */}
      <div className="text-center w-100  d-flex justify-content-center align-items-center">
        <NewTrip show={modalTrip} onHide={() => setModalTrip(false)} />
      </div>
    </div>
  );
}
