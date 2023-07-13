import React from "react";
import styles from "../../../styles/allcards.module.css";

export default ({ imageUrl, city, country }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRpeat: "no-repeat",
    // borderRadius: "22px",
  };
  return (
    <div className="col-12 col-md-6 col-lg-4 p-lg-2 p-2">
      <div className={styles.landingimage} style={cardStyle}>
        <h6 className={`fw-500 mb-0 ${styles.landingeventheading}`}>
          {city} <br />
          <span className="my-3">{country}</span>
        </h6>
      </div>
    </div>
  );
};
