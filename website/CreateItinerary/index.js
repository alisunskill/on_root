import React, { useEffect, useState } from "react";
import styles from "../../styles/singular.module.css";
import calender from "../../public/images/calender.svg";
import moneyicon from "../../public/images/moneyicon.svg";
import hearticon21 from "../../public/images/hearticon21.svg";
import burger from "../../public/images/burger.svg";
import painticon from "../../public/images/painticon.svg";
import travelicon from "../../public/images/travelicon.svg";
import mapimage from "../../public/images/mapimage.svg";
import plusimage from "../../public/images/plusimage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import plane from "../../public/images/aeroplan.svg";
import Image from "next/image";
import GoogleLoc from "./components/GoogleLoc";
import axios, { all } from "axios";
import { useRouter } from "next/router";
import GoogleMapReact from "google-map-react";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
// import getUser  from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const RedMarker = ({ text }) => (
  <div
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "red",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {text}
  </div>
);
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const CircleMarker = ({ text }) => (
  <div
    style={{
      width: "100px",
      height: "20px",
      borderRadius: "50%",
      background: "blue",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {text}
  </div>
);

export default () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [recommendation, setRecommendation] = useState([]);

  const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const userID = useSelector((state) => state.user?.userID);
  console.log(userID, "ali");


  const userExists = userID !== undefined && userInfo !== null;

  const { recommendations, loading, error } = recommendationsData;
  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  const allRegion = recommendations.Recommendations?.map((item) => {
    return <h1 key={item._id}>{item.location}</h1>;
  });

  const router = useRouter();
  const [locationInput, setLocationInput] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 31.5204,
    lng: 74.3587,
  });

  const [formData, setFormData] = useState({
    title: "",
    images: [],
    cost: "",
    hours: "",
    experience: "",
    description: "",
    location: { type: "Point", coordinates: [0, 0] },
    region: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const locationData = {
        type: "Point",
        coordinates: formData.location.coordinates,
      };
      // user authentication
      formData.creator = userInfo?._id;

      const response = await axios.post(
        "http://localhost:8000/api/createrecommendation",
        formData
      );

      setRecommendation((prevRecommendation) => [
        ...prevRecommendation,
        formData,
      ]);

      if (response.status === 201) {
        if (userExists) {
          alert("Recommendation created successfully!");
        } else {
          alert("User does not exist. Recommendation created successfully!");
        }

        alert("Recommendation created successfully!");
        setFormData({
          title: "",
          images: [],
          cost: "",
          hours: "",
          experience: "",
          description: "",
          location: { type: "Point", coordinates: [0, 0] },
          region: "",
        });
        router.push("/createitinerary");
      } else {
        alert("Failed to create recommendation.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    const imageUrls = selectedImages.map((image) => URL.createObjectURL(image));
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...imageUrls],
    }));
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects as needed
    // For example, you can use them to add markers, draw shapes, etc.
    const lahoreMarker = new maps.Marker({
      position: { lat: 31.5204, lng: 74.3587 },
      map,
      title: "Lahore",
    });
    const islamabadMarker = new maps.Marker({
      position: { lat: 33.6844, lng: 73.0479 },
      map,
      title: "Islamabad",
    });
    recommendation.forEach((form) => {
      const formMarker = new maps.Marker({
        position: {
          lat: form.location.coordinates[1],
          lng: form.location.coordinates[0],
        },
        map,
        title: form.title,
      });

      // Add event listener to show form data when the marker is clicked
      formMarker.addListener("click", () => {
        alert(`Title: ${form.title}\nCost: ${form.cost}\nHours: ${form.hours}`);
      });
    });
    // Add marker for the location from formData
    // const locationMarker = new maps.Marker({
    //   position: {
    //     lat: formData.location.coordinates[0],
    //     lng: formData.location.coordinates[1],
    //   },
    //   map,
    //   title: "Your Location",
    // });
  };

  const handleMapDoubleClick = (event) => {
    const latitude = event.lat;
    const longitude = event.lng;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        if (status === "OK" && results[0]) {
          const locationName = results[0].formatted_address;

          setLocationInput(locationName);
          setFormData({
            ...formData,
            location: { type: "Point", coordinates: [longitude, latitude] },
          });
        }
      }
    );
  };
  const handleLocationInputBlur = () => {
    // Use Google Maps Geocoder API to get the coordinates (latitude and longitude) of the input location
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: locationInput }, (results, status) => {
      if (status === "OK" && results[0]) {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        // Update the form data and map center
        setFormData({
          ...formData,
          location: { type: "Point", coordinates: [longitude, latitude] },
        });
        setMapCenter({ lat: latitude, lng: longitude });
      }
    });
  };

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="row">
          <div
            className={`col-lg-5 col-12 col-md-12 mt-3  ${styles.scenerypara}`}
          >
            <form id="recommendationForm" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control py-3"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  placeholder="Enter Title..."
                />
              </div>

              <div className="row justify-between pt-3">
                <div className="form-group col-lg-4">
                  <input
                    type="file"
                    className="form-control-file p-0 custom-file-input"
                    accept="image/*,video/*"
                    multiple
                    required
                    onChange={handleImageChange}
                  />
                </div>
                <div className="form-group col-lg-4 px-3">
                  <input
                    type="file"
                    className="form-control-file p-0 custom-file-input"
                    accept="image/*,video/*"
                    multiple
                    required
                    onChange={handleImageChange}
                  />
                </div>
                <div className="form-group col-lg-4">
                  <input
                    type="file"
                    className="form-control-file p-0 custom-file-input"
                    accept="image/*,video/*"
                    multiple
                    required
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="row mt-5 align-items-center">
                <div className="form-group col-lg-6 col-12 text-center">
                  <Image
                    width="45"
                    height="30"
                    src={moneyicon}
                    className="mt-3 mb-3"
                    alt="calender"
                  />
                  <input
                    type="number"
                    name="cost"
                    className="form-control py-2"
                    value={formData.cost}
                    onChange={(e) =>
                      setFormData({ ...formData, cost: e.target.value })
                    }
                    required
                    placeholder="Cost to Attend"
                  />
                </div>
                <div className="form-group col-lg-6 col-12 text-center">
                  <Image
                    width="40"
                    height="30"
                    src={calender}
                    className="mt-3 mb-3 object-fit-cover"
                    alt="calender"
                  />
                  <input
                    type="text"
                    name="hours"
                    className="form-control py-2"
                    value={formData.hours}
                    onChange={(e) =>
                      setFormData({ ...formData, hours: e.target.value })
                    }
                    required
                    placeholder="Hours of Operation"
                  />
                </div>
              </div>
              <div className="form-group pt-5">
                <input
                  type="text"
                  name="location"
                  className="form-control py-2"
                  // value={formData.location}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, location: e.target.value })
                  // }
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  onBlur={handleLocationInputBlur}
                  required
                  placeholder="Provide a Location"
                />
              </div>
              <div className="form-group pt-5">
                <input
                  type="text"
                  name="region"
                  className="form-control py-2"
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  required
                  placeholder="Provide a Region"
                />
              </div>

              <div className="form-group mt-5">
                <textarea
                  placeholder="Personal anecdote of experience..."
                  className="form-control p-3"
                  id="exampleFormControlTextarea1"
                  name="experience"
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  required
                  rows="6"
                ></textarea>
              </div>

              <div className="form-group mt-4">
                <textarea
                  placeholder="Additional Links..."
                  className="form-control p-3"
                  id="exampleFormControlTextarea2"
                  rows="4"
                  name="description"
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-1">
            <div className="row">
              <div
                className={`col-12 col-md-12 col-lg-12 text-center ${styles.eventmidicons}`}
              >
                <div className={styles.eventicons}>
                  <Image
                    className={`h-auto ${styles.foodIcons}`}
                    src={burger}
                    alt=""
                  />
                </div>
                <div className={` ${styles.eventicons}`}>
                  <Image
                    className={`h-auto ${styles.foodIcons}`}
                    src={painticon}
                    alt=""
                  />
                </div>
                <div className={` ${styles.eventicons}`}>
                  <Image
                    className={`h-auto ${styles.foodIcons}`}
                    src={travelicon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-align-right p-0">
            {/* <GoogleLoc /> */}
            {/* <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAX815OLgYZi7EbfQOgbBn6XeyCzwexMlM",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div> */}
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAX815OLgYZi7EbfQOgbBn6XeyCzwexMlM", // Replace this with your Google Maps API key
                  libraries: ["places"], // Add the "places" library for Geocoding API
                }}
                defaultCenter={{ lat: 31.5204, lng: 74.3587 }} // Lahore as defaultCenter
                defaultZoom={7}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  handleApiLoaded(map, maps)
                }
                onDblClick={handleMapDoubleClick} // Handle double-click events
                center={mapCenter} // Set the map center based on form data
              >
                {/* Add the location marker */}
                <CircleMarker
                  lat={formData.location.coordinates[1]}
                  lng={formData.location.coordinates[0]}
                  text="Your Location"
                />

                {recommendation?.map((form, index) => (
                  <RedMarker
                    key={index}
                    lat={form.location.coordinates[1]}
                    lng={form.location.coordinates[0]}
                    text={form.title}
                  />
                ))}
              </GoogleMapReact>
            </div>
          </div>
        </div>

        <div className="text-center mt-lg-5 mt-4">
          <button
            type="submit"
            form="recommendationForm"
            className="savebtn"
            style={{ marginRight: "50px" }}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};
