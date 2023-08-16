import React, { useEffect, useState } from "react";
import styles from "../../styles/singular.module.css";
import calender from "../../public/images/calender.svg";
import moneyicon from "../../public/images/moneyicon.svg";
import hearticon21 from "../../public/images/hearticon21.svg";
import burger from "../../public/images/burger.svg";
import painticon from "../../public/images/painticon.svg";
import travelicon from "../../public/images/travelicon.svg";
import Image from "next/image";
import GoogleLoc from "./components/GoogleLoc";
import axios, { all } from "axios";
import { useRouter } from "next/router";
import GoogleMapReact from "google-map-react";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import FileBase64 from "react-file-base64";

const apiKey = process.env.SECRET_KEY;

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
  const router = useRouter();
  const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const userID = useSelector((state) => state.recommendation);
  const { region } = router.query;
  const [storedUserID, setStoredUserID] = useState(null);
  const [storedEmail, setStoredEmail] = useState(null);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [recommendation, setRecommendation] = useState([]);
  const userExists = userID;
  const { recommendations, loading, error } = recommendationsData;
  console.log(recommendations, "recommendations");

  // const loading = true;
  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  // api
  const [regionData, setRegion] = useState([]);
  const { descriptor } = router.query;
  const [filteredData, setFilteredData] = useState([]);

  const recommendationData =
    (recommendations && recommendations.Recommendations) || [];
  useEffect(() => {
    setRegion(recommendationData);
  }, [regionData]);

  const regionp = regionData.map((item) => {
    return item.region;
  });
  const data = [
    {
      bgImg:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
      city: regionp[0],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1689072503598-638956beee7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=660&q=80",
      city: regionp[1],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1593593595698-de9e5f682a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=834&q=80",
      city: regionp[2],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1595112729465-942dafaa4e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80",
      city: regionp[2],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      city: regionp[1],

      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
      city: regionp[0],

      country: "USA",
    },
  ];
  const regionDescriptor = regionData.map((item) => {
    return item.descriptor;
  });

  // discripttors urls
  useEffect(() => {
    if (descriptor) {
      const filteredDescriptorData = regionData.filter(
        (item) => item.descriptor === descriptor
      );
      setFilteredData(filteredDescriptorData);
    }
  }, [descriptor, regionData]);

  // check warning
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    const email = localStorage.getItem("email");
    setStoredUserID(userID);
    setStoredEmail(email);
  }, []);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  console.log(regionDescriptor, "regionDescriptor");
  useEffect(() => {
    if (region) {
      const filteredRegionData = regionData.filter(
        (item) => item.region === region
      );
      setFilteredData(filteredRegionData);
    }
  }, [region, regionData]);
  useEffect(() => {
    if (regionData && descriptor) {
      const filteredDescriptorData = regionData.filter(
        (item) => item.descriptor === descriptor
      );
      setFilteredData(filteredDescriptorData);
    }
  }, [descriptor, regionData]);

  const allLocations = recommendations?.Recommendations?.map((item) => {
    return {
      lat: item.location.coordinates[1],
      lng: item.location.coordinates[0],
      title: item.title,
    };
  });
  console.log(allLocations, "allregions");
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
    location: { type: "Point", coordinates: [0, 0] },
    region: "",
    links: "",
  });

  console.log(formData, "formData formDataformDataformData");
  const isFormDataValid = () => {
    if (
      !formData.title ||
      formData.images.length === 0 ||
      !formData.cost ||
      !formData.hours ||
      !formData.experience ||
      !formData.location ||
      !formData.region ||
      !formData.descriptor ||
      !formData.description
    ) {
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormDataValid()) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      const formDataToSend = new FormData();

      const locationData = {
        type: "Point",
        coordinates: formData.location.coordinates,
      };

      // user authentication
      formData.creator = storedUserID;
      const token = localStorage.getItem("token");

      console.log(token, "token is here");
      const response = await axios.post(
        "http://localhost:8000/api/createrecommendation",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setRecommendation((prevRecommendation) => [
        ...prevRecommendation,
        formData,
      ]);

      if (response.status === 201 && storedUserID) {
        alert("Recommendation created successfully!");

        setFormData({
          title: "",
          images: [],
          cost: "",
          hours: "",
          experience: "",
          descriptor: "",
          location: { type: "Point", coordinates: [0, 0] },
          region: "",
          description: "",
        });
        router.push("/");
      } else {
        alert("Failed to create recommendation.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleApiLoaded = (map, maps) => {
    if (loading || !recommendations?.Recommendations) {
      return;
    }

    recommendations.Recommendations.forEach((location) => {
      const marker = new maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: location.title,
      });

      marker.addListener("click", () => {
        alert(`Title: ${location.title}`);
      });
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

      formMarker.addListener("click", () => {
        alert(`Title: ${form.title}\nCost: ${form.cost}\nHours: ${form.hours}`);
      });
    });
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
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: locationInput }, (results, status) => {
      if (status === "OK" && results[0]) {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        setFormData({
          ...formData,
          location: { type: "Point", coordinates: [longitude, latitude] },
        });
        setMapCenter({ lat: latitude, lng: longitude });
      }
    });
  };

  const onSelectImages = (files, component) => {
    const imagesArray = files.map((file) => file.base64.toString());

    if (component === "component1") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...imagesArray],
      }));
    } else if (component === "component2") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...imagesArray],
      }));
    } else if (component === "component3") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...imagesArray],
      }));
    }
  };

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="row">
          <div
            className={`col-lg-5 col-12 col-md-12 mt-3  ${styles.scenerypara}`}
          >
            <form
              id="recommendationForm"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
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

              <div className="row justify-content-between gap-3">
                <div className="col-lg-3  form-control-file custom-file-input">
                  <FileBase64
                    multiple
                    onDone={(files) => onSelectImages(files, "component1")}
                  />
                </div>
                <div className="col-lg-3  form-control-file p-0 custom-file-input">
                  <FileBase64
                    multiple
                    onDone={(files) => onSelectImages(files, "component2")}
                  />
                </div>
                <div className="col-lg-3  form-control-file p-0 custom-file-input">
                  <FileBase64
                    multiple
                    onDone={(files) => onSelectImages(files, "component3")}
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
                  <label>
                    <input
                      type="radio"
                      value="food"
                      checked={formData.descriptor === "food"}
                      onChange={(e) =>
                        setFormData({ ...formData, descriptor: e.target.value })
                      }
                      style={{ display: "none" }}
                    />
                    <Image
                      className={`h-auto cursor-pointer ${styles.foodIcons}`}
                      src={burger}
                      alt=""
                      style={
                        formData.descriptor === "food"
                          ? { border: "2px solid green", borderRadius: "50px" }
                          : formData.descriptor === {}
                          ? { border: "none" }
                          : {}
                      }
                    />
                  </label>
                </div>
                <div className={` ${styles.eventicons}`}>
                  <label>
                    <input
                      type="radio"
                      value="Art"
                      checked={formData.descriptor === "Art"}
                      onChange={(e) =>
                        setFormData({ ...formData, descriptor: e.target.value })
                      }
                      style={{ display: "none" }}
                    />
                    <Image
                      className={`h-auto cursor-pointer ${styles.foodIcons}`}
                      src={painticon}
                      alt=""
                      style={
                        formData.descriptor === "Art"
                          ? { border: "2px solid green", borderRadius: "50px" }
                          : formData.descriptor === {}
                          ? { border: "none" }
                          : {}
                      }
                    />
                  </label>
                </div>
                <div className={` ${styles.eventicons}`}>
                  <label>
                    <input
                      type="radio"
                      value="Hiking"
                      checked={formData.descriptor === "Hiking"}
                      onChange={(e) =>
                        setFormData({ ...formData, descriptor: e.target.value })
                      }
                      style={{ display: "none" }}
                    />
                    <Image
                      className={`h-auto cursor-pointer ${styles.foodIcons}`}
                      src={travelicon}
                      alt=""
                      style={
                        formData.descriptor === "Hiking"
                          ? { border: "2px solid green", borderRadius: "50px" }
                          : formData.descriptor === {}
                          ? { border: "none" }
                          : {}
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-align-right p-0">
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAX815OLgYZi7EbfQOgbBn6XeyCzwexMlM",
                  libraries: ["places"],
                }}
                defaultCenter={{ lat: 31.5204, lng: 74.3587 }}
                defaultZoom={7}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) =>
                  handleApiLoaded(map, maps)
                }
                onDblClick={handleMapDoubleClick}
                center={mapCenter}
              >
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
            form="recommendationForm"
            type="submit"
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
