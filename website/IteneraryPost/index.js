import React from "react";
import styles from "../../styles/post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import globe from "../../public/images/globe.svg";
import Image from "next/image";

export default () => {
  return (
    <div className="text-center py-5">
      <div>
        <h1>Create a Post</h1>
        <p className="pt-3 fw-500">
          Discover the world's top destinations and plan your next adventure
          with ease using
          <br /> Onroot's curated posts and itineraries
        </p>
      </div>

      <div className="row align-center">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="d-flex justify-content-end">
            <button href="#" className={styles.itin_button}>
              {" "}
              <FontAwesomeIcon icon={faPlus} />
              <h1>Recommendation</h1>
            </button>
          </div>
          <div className="pt-4 d-flex justify-content-end">
            <button href="#" className={styles.itin_button}>
              {" "}
              <FontAwesomeIcon icon={faPlus} />
              <h1>Recommendation</h1>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <Image className={styles.itin_globe} src={globe} alt="globe" />
        </div>
      </div>
      <div className="mt-5 pt-3">
        <button className="savebtn ">Finish</button>
      </div>
    </div>
  );
};
