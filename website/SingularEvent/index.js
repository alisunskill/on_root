import React from "react";
import styles from "../../styles/singular.module.css";
import clockicon from "../../public/images/clockicon.svg";
import plusicon2 from "../../public/images/plusicon2.svg";
import hearticon21 from "../../public/images/hearticon21.svg";
import burger from "../../public/images/burger.svg";
import painticon from "../../public/images/painticon.svg";
import travelicon from "../../public/images/travelicon.svg";
import mapimage from "../../public/images/mapimage.svg";
import moneyicon from "../../public/images/moneyicon.svg";
import slide from "../../public/images/slide.svg";
import PlaceCard from "../../website/components/PlaceCard";
import Image from "next/image";
import SliderEvent from "./sliderApp";

const data = [
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    itinerary: "ITINERARY",
    title: "POST TITLE HERE",
    place: "City, Country",
  },
];

function Singularevent() {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="row">
          <div
            className={`col-lg-5 col-12 col-md-12 mt-3 ${styles.scenerypara}`}
          >
            <div className={`row align-items-center ${styles.eventtopsection}`}>
              <div className=" col-9 col-md-6 col-lg-8">
                <h6 className="fw-500">
                  Garden State Gathering: Celebrating New Jersey's Rich Culture
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
                {/* <Image className={`h-auto ${styles.scenery}`} src={slide} /> */}
                <SliderEvent />
              </div>

              <div className="col-12 col-md-12 col-lg-12 py-3">
                <p className={styles.eventtitlepara}>
                  Join us for an exciting event celebrating the diverse and
                  vibrant culture of the great state of New Jersey! The Garden
                  State Gathering will be a day filled with music, food, and
                  entertainment that showcases the unique history and traditions
                  of the region. <br /> <br /> Discover the best of New Jersey's
                  arts and crafts as you browse through our artisan market
                  featuring handmade goods from local vendors. Taste the flavors
                  of the state with a selection of food and drink from some of
                  the best restaurants and breweries in the area. And don't miss
                  out on our live performances, featuring musicians, dancers,
                  and other artists who represent the many cultures that call
                  New Jersey home. <br /> <br />
                  Whether you're a lifelong resident or visiting for the first
                  time, the Garden State Gathering is an event you won't want to
                  miss. Come celebrate the rich heritage of New Jersey and
                  experience all that this great state has to offer!
                </p>
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
            <Image
              className={`h-auto ${styles.eventmapimage}`}
              src={mapimage}
              alt=""
            />
          </div>
        </div>

        <div
          className={`d-flex justify-content-center align-items-center gap-lg-5 gap-md-3 ${styles.eventmidsection}`}
        >
          <div
            className={`d-flex justify-content-center align-items-center flex-column ${styles.eventoperationhours}`}
          >
            <Image className={styles.eventclockicon} src={clockicon} alt="" />
            <h5 className="fw-700 mb-4"> Hours of Operation</h5>

            <p className={styles.eventhourstext}>June 10th, 2023</p>
            <p className={styles.eventhourstext}>Saturday</p>
            <p className={styles.eventhourstext}>
              from <b>12:00pm</b> to <b>8:00am</b>
            </p>
          </div>
          <div
            className={`d-flex justify-content-center align-items-center flex-column ${styles.eventoperationhours}`}
          >
            <Image className={styles.eventmoneyicon} src={moneyicon} alt="" />
            <h5 className="fw-700 mb-4"> Cost to attend </h5>

            <p className={styles.eventhourstext}>Adult:$50:00</p>
            <p className={` pb-2 ${styles.eventhourstext}`}>Childern:$25:00</p>
            <p></p>
            <br />
          </div>
        </div>
        <div className="text-center py-5">
          <p className={`fw-600 mb-0 ${styles.eventendheading}`}>
            Places Of Interest Near By
          </p>
        </div>
        <div
          className={`row px-4 d-flex justify-content-center align-items-center ${styles.landingendcard1}`}
        >
          {data.map((item, index) => {
            return (
              <PlaceCard
                key={index}
                imageUrl={item.bgImg}
                itinerary={item.itinerary}
                title={item.title}
                place={item.place}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Singularevent;
