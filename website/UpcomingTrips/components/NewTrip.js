import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/viewsave.module.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useRouter } from "next/router";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NewTrip(props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    region: "",
    email: "",
    sdate: "",
    edate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCreate = async (event) => {
    if (!formData.title || !formData.region || !formData.email || !formData.sdate || !formData.edate) {
      alert("Please fill in all fields.");
      return; // Do not proceed with the API request
    }
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/trips",
        formData
      );
alert("Fill all fields")

      router.push("/upcomingtrips");
      console.log(response.data);

      // props.onHide();
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{ padding: "20px 40px", border: "none" }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`text-center fw-600 w-100 ${styles.thumbnail}`}
          >
            Create a new trip{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "20px 40px 20px 40px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="py-lg-3 py-md-2 mt-3 rounded-5"
                placeholder="Enter the Title"
              />
              {/* 
              <Form.Control
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="py-lg-3 py-md-2 mt-3"
                placeholder="Enter the Region "
              /> */}
              <PlacesAutocomplete
                value={formData.region}
                onChange={(value) => {
                  setFormData((prevData) => ({ ...prevData, region: value }));
                }}
                onSelect={async (value) => {
                  try {
                    const results = await geocodeByAddress(value);
                    const latLng = await getLatLng(results[0]);
                    console.log("Selected Location:", value);
                    console.log("Coordinates:", latLng);
                    setFormData((prevData) => ({ ...prevData, region: value }));
                  } catch (error) {
                    console.error("Error:", error);
                  }
                }}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <Form.Control
                      {...getInputProps({
                        placeholder: "Enter the Region",
                        className: "py-lg-3 py-md-2 mt-3 rounded-5",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const style = {
                          backgroundColor: suggestion.active
                            ? "#41b6e6"
                            : "#fff",
                        };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              style,
                              className: "suggestion-item",
                            })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>

              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-lg-3 py-md-2 mt-3 rounded-5"
                placeholder="Add Collaborators (Email)"
              />

              {/* <Form.Control
                type="date"
                name="sdate"
                value={formData.sdate}
                onChange={handleChange}
                className="py-lg-3 py-md-2 mt-3"
                placeholder="Start Date"
              />

              <Form.Control
                type="date"
                name="edate"
                value={formData.edate}
                onChange={handleChange}
                className="py-lg-3 py-md-2 mt-3"
                placeholder="Start Date"
              /> */}

              <DatePicker
                selected={formData.sdate}
                onChange={(date) =>
                  setFormData((prevData) => ({ ...prevData, sdate: date }))
                }
                className={`py-lg-3 py-md-2 mt-3 form-control rounded-5 ${styles.datepicke_wrapper}`}
                placeholderText="Start Date"
              />
              <br />
              <DatePicker
                selected={formData.edate}
                onChange={(date) =>
                  setFormData((prevData) => ({ ...prevData, edate: date }))
                }
                className={`py-lg-3 py-md-2 mt-3 form-control rounded-5 ${styles.datepicke_wrapper}`}
                placeholderText="End Date"
              />

              <button
                className={`text-center fw-500 rounded-5 ${styles.herobtn}`}
                onClick={handleCreate}
              >
                Finish
              </button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
