import React from "react";
import styles from "../../styles/singular.module.css";
import burger from "../../public/images/burger.svg";
import painticon from "../../public/images/painticon.svg";
import travelicon from "../../public/images/travelicon.svg";
import mapimage from "../../public/images/mapimage.svg";
import Image from "next/image";
import PlaceCardFull from "../components/PlaceCardFull";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import gallery from "../../public/images/gallery.svg";

const eventData = [
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
    time: "9:00 am",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
    time: "9:00 am",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
    time: "9:00 am",
  },
];
function Singularevent() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row">
          <h1 className="dark bold pb-3 text-center mb-3">Single Trip View</h1>
          <div
            className={`col-lg-5 col-12 col-md-12 mt-3 ${styles.scenerypara}`}
          >
            <div className="row justify-content-between align-center">
              <div className="col-2">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="p-2"
                  style={{
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "50px",
                    width: "30px",
                    height: "30px",
                  }}
                  size="2x"
                />
              </div>
              <div className="col-2">
                <Image width={45} height={45} src={gallery} />
              </div>
            </div>
            {/* days */}
            <div className="row">
                <div className="col-12">
                    <p>Tuesday</p>
                    
                </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 mt-4">
                <div
                  className={`row  d-flex justify-content-center flex-column align-items-center ${styles.landingendcard1}`}
                >
                  {eventData.map((item, index) => {
                    return (
                      <PlaceCardFull
                        key={index}
                        imageUrl={item.bgImg}
                        itinerary={item.itinerary}
                        title={item.title}
                        place={item.place}
                        time={item.time}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-1">
            <div className="row">
              <div
                className={`col-12 col-md-12 col-lg-12 ${styles.eventmidicons}`}
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
            <h3 className="dark bold pb-3 text-center fw-600">
              30th June to 30th July
            </h3>

            <Image
              className={`h-auto ${styles.eventmapimage}`}
              src={mapimage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Singularevent;
