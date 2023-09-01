import React, { useState, useEffect } from "react";
import styles from "../../styles/singular.module.css";
import plusicon2 from "../../public/images/plusicon2.svg";
import hearticon21 from "../../public/images/hearticon21.svg";
import burger from "../../public/images/burger.svg";
import painticon from "../../public/images/painticon.svg";
import { useRouter } from "next/router";
import travelicon from "../../public/images/travelicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import plane from "../../public/images/aeroplan.svg";
import Image from "next/image";
import SliderApps from "./SliderApps";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import Cookies from "js-cookie";

export default function EventDetail() {
  const router = useRouter();

  const { postId } = router.query;

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

  const imagesData = itemData.map((item) => item.img);
  const RedMarker = ({ text, latitude, longitude }) => (
    <div
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        background: "red",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        position: "absolute",
        transform: "translate(-50%, -50%)",
      }}
      lat={latitude}
      lng={longitude}
    >
      <p className="px-5  py-1 bg-danger rounded-5">{text}</p>
    </div>
  );

  const [postid, setPostId] = useState("");

  useEffect(() => {
    const postId = Cookies.get("postIdCookie");
    console.log("Retrieved postId:", postId);
    setPostId(postId);
  }, []);

  // const { postId } = router.query;

  console.log(postid, "id");

  const recommendationsData = useSelector((state) => state.recommendation);
  const { recommendations, loading, error } = recommendationsData;

  const recData = recommendations.Recommendations;

  const filteredData = recData?.find((item) => item._id === postid);
  console.log(filteredData, "filteredData vv");

  const filterLoc = filteredData?.location;
  const [staticMarkerPosition, setStaticMarkerPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [selectedIds, setSelectedIds] = useState([]);
  // const [mapCenter, setMapCenter] = useState({
  //   lat: 31.5204,
  //   lng: 74.3587,
  // });
  const [mapCenter, setMapCenter] = useState({
    lat: filterLoc?.coordinates?.[1] || 31.5204,
    lng: filterLoc?.coordinates?.[0] || 74.3587,
  });
  const [locationInput, setLocationInput] = useState("");
  // const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (filterLoc?.coordinates) {
      setStaticMarkerPosition({
        lat: filterLoc.coordinates[1],
        lng: filterLoc.coordinates[0],
      });
      setMapCenter({
        lat: filterLoc.coordinates[1],
        lng: filterLoc.coordinates[0],
      });
    }
  }, [filterLoc?.coordinates]);

  useEffect(() => {
    const selectedIdsFromLocalStorage =
      JSON.parse(localStorage.getItem("postId")) || [];
    setSelectedIds(selectedIdsFromLocalStorage);
  }, []);

  // const imageUrls = filteredData?.images;

  const imageUrls = filteredData?.images.map((item) => {
    return (
      <>
        <img src={item} alt="" />
      </>
    );
  });
  // console.log(filteredData.images, "imageUrls");

  // const filterLoc = filteredData?.location;
  console.log(filterLoc?.coordinates, "filterLoc nnn");

  const handleApiLoaded = (map, maps) => {
    if (loading || !filteredData) {
      return;
    }

    filteredData?.arrayProperty?.forEach((form) => {
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

    filteredData?.arrayProperty?.forEach((form) => {
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

  const calculateCenter = (locations) => {
    if (!locations || locations.length === 0) {
      return { lat: 31.5204, lng: 74.3587 };
    }

    const sumLat = locations.reduce(
      (sum, location) => sum + location.location.coordinates[1],
      0
    );
    const sumLng = locations.reduce(
      (sum, location) => sum + location.location.coordinates[0],
      0
    );

    const avgLat = sumLat / locations.length;
    const avgLng = sumLng / locations.length;

    return { lat: avgLat, lng: avgLng };
  };

  useEffect(() => {
    if (filterLoc?.coordinates) {
      console.log("Filter Location Coordinates:", filterLoc?.coordinates);

      setStaticMarkerPosition({
        // latitude: filterLoc?.coordinates[1],
        // longitude: filterLoc?.coordinates[0],
        lat: filterLoc?.coordinates[1],
        lng: filterLoc?.coordinates[0],
      });
    }
  }, [filterLoc?.coordinates]);
  return (
    <>
      {/* {postid} */}
      {/* {filteredData?.experience} */}
      {/* {filteredData?.cost} */}
      {/* {imageUrls} */}
      <div className="container-fluid pb-5">
        <div className="row">
          <div
            className={`col-lg-5 col-12 col-md-12 mt-3 ${styles.scenerypara}`}
          >
            <div className={`row align-items-center ${styles.eventtopsection}`}>
              <div className=" col-9 col-md-6 col-lg-8">
                <h6 className="fw-500">
                  {/* Garden State Gathering: Celebrating New Jersey's Rich Culture */}
                  {filteredData?.title}
                </h6>
              </div>
              <div
                className={` col-3 col-md-6 col-lg-4 align-items-center d-flex justify-content-end gap-3 ${styles.eventicon}`}
              >
                <div
                  className={`d-flex align-items-center justify-content-center ${styles.eventicondiv}`}
                >
                  <Image
                    className={styles.eventtopicons}
                    src={plusicon2}
                    alt=""
                  />
                </div>
                <div
                  className={`d-flex align-items-center justify-content-center ${styles.eventicondiv}`}
                >
                  <Image
                    className={styles.eventtopicons}
                    src={hearticon21}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 mt-4">
                <SliderApps images={filteredData?.images} />
              </div>

              <div className="col-12 col-md-12 col-lg-12 py-3">
                <p className={styles.eventtitlepara}>
                  <br />
                  {filteredData?.description} <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-1">
            <div className="row">
              <div
                className={`col-12 col-md-12 col-lg-12 text-center ${styles.eventmidicons}`}
              >
                {/* <div className={styles.eventicons}>
                  <Image
                    className={`h-auto ${styles.foodIcons}`}
                    src={burger}
                    alt=""
                    style={
                      filteredData?.descriptor === "food"
                        ? { border: "2px solid green", borderRadius: "50px" }
                        : { border: "none" }
                    }
                  />
                </div>
                <div className={` ${styles.eventicons}`}>
                  <Image
                    className={`h-auto ${styles.foodIcons}`}
                    src={painticon}
                    alt=""
                    style={
                      filteredData?.descriptor === "Art"
                        ? { border: "2px solid green", borderRadius: "50px" }
                        : { border: "none" }
                    }
                  />
                </div>
                <div className={` ${styles.eventicons}`}>
                  <Image
                    className={`h-auto ${styles.foodIcons}`}
                    src={travelicon}
                    alt=""
                    style={
                      filteredData?.descriptor === "Hiking"
                        ? { border: "2px solid green", borderRadius: "50px" }
                        : { border: "none" }
                    }
                  />
                </div> */}
                {filteredData?.descriptor === "food" && (
                  <div className={styles.eventicons}>
                    <Image
                      className={`h-auto ${styles.foodIcons}`}
                      src={burger}
                      alt=""
                      style={{
                        border: "2px solid green",
                        borderRadius: "50px",
                      }}
                    />
                    {/* <h4> {filteredData?.descriptor} </h4> */}
                  </div>
                )}

                {filteredData?.descriptor === "Art" && (
                  <div className={` ${styles.eventicons}`}>
                    <Image
                      className={`h-auto ${styles.foodIcons}`}
                      src={painticon}
                      alt=""
                      style={{
                        border: "2px solid green",
                        borderRadius: "50px",
                      }}
                    />
                    {/* <h4> {filteredData?.descriptor} </h4> */}
                  </div>
                )}

                {filteredData?.descriptor === "Hiking" && (
                  <div className={` ${styles.eventicons}`}>
                    <Image
                      className={`h-auto ${styles.foodIcons}`}
                      src={travelicon}
                      alt=""
                      style={{
                        border: "2px solid green",
                        borderRadius: "50px",
                      }}
                    />
                    {/* <h4> {filteredData?.descriptor} </h4> */}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 text-align-right p-0">
            <Image
              className={`h-auto object-fit-cover ${styles.eventmapimage}`}
              src={mapimage}
              alt=""
            />
          </div> */}
          <div className="col-lg-6 col-12 text-align-right p-0">
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
                // center={{
                //   lat: filterLoc,
                //   lng: filterLoc,
                // }}
                center={{
                  lat: 31.5204,
                  lng: 74.3587,
                }}
                // center={mapCenter}
              >
                {filteredData?.arrayProperty?.map((form, index) => (
                  <RedMarker
                    key={index}
                    lat={form.location.coordinates[1]}
                    lng={form.location.coordinates[0]}
                  />
                ))}

                {filterLoc?.coordinates && (
                  <RedMarker
                    lat={staticMarkerPosition.lat}
                    lng={staticMarkerPosition.lng}
                    text={filteredData?.region}
                  />
                )}
              </GoogleMapReact>
            </div>
          </div>
        </div>

        <div className={`row ${styles.recommendtriphero}`}>
          <div className="col-3"></div>
          <div
            className={`col-5 col-lg-5 col-md-12 d-flex align-center justify-content-between p-3 px-4 ${styles.recommendtrip}`}
          >
            <div className="d-flex align-center gap-2">
              <FontAwesomeIcon icon={faHeart} size="2x" color="red" />
              <p className="bold mb-0">145 Saved</p>
            </div>
            <div className="d-flex align-center gap-2">
              <Image src={plane} width={70} height={50} />{" "}
              <p className="bold mb-0">30 Added to Trips</p>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
