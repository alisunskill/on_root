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

import { Button, Collapse } from "react-bootstrap";

const collapseData = [
  { id: 1, title: "Item 1", content: "Content for Item 1" },
  { id: 2, title: "Item 2", content: "Content for Item 2" },
  { id: 3, title: "Item 3", content: "Content for Item 3" },
];

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

function UpcomingtripsList() {
  const [openCollapseId, setOpenCollapseId] = React.useState(null);

  const toggleCollapse = (id) => {
    setOpenCollapseId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="row">
          <h1 className="dark bold pb-3 text-center mb-4">Single Trip View</h1>
          <div
            className={`col-lg-5 col-12 col-md-12 mt-3 ${styles.scenerypara}`}
          >
            <div className="row justify-content-between align-items-center">
              <div className="col-2">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="p-2 cursor-pointer"
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
                <Image
                  className="cursor-pointer"
                  width={45}
                  height={45}
                  src={gallery}
                />
              </div>
            </div>
            {/* days */}
            <div className="row px-0 pt-5">
              <div
                className="col-12 mx-0 px-0 rounded-2"
                style={{ background: "#eeeeee" }}
              >
                {collapseData.map((item) => (
                  <div key={item.id}>
                    <Button
                      onClick={() => toggleCollapse(item.id)}
                      aria-controls={`collapse-${item.id}`}
                      aria-expanded={openCollapseId === item.id}
                      className={`col-12 p-0 text-start text-dark ${styles.dayshero}`}
                    >
                      {item.title}
                    </Button>
                    <Collapse in={openCollapseId === item.id}>
                      <div id={`collapse-${item.id}`}>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 pt-0 mt-0">
                            <div
                              className={`row  d-flex justify-content-center flex-column align-items-center ${styles.landingendcard1}`}
                              style={{ background: "white" }}
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
                    </Collapse>
                  </div>
                ))}
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
        <div className="row px-4 mx-1 pt-5">
          <div className="col-12">
            <input
              type="text"
              placeholder="Enter Notes For Your Self"
              className={`position-relative ${styles.notestext}`}
            />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4  text-center"></div>
          <div className="col-lg-4 col-md-6 text-center">
            <button className="savebtn">Save</button>
          </div>
          <div className="col-lg-4 col-md-6  text-center">
            <h2>Total: &nbsp; &nbsp;$340.00</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpcomingtripsList;