import React from "react";
import styles from "../../../styles/allcards.module.css";

export default ({ imageUrl, title, region }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRpeat: "no-repeat",
  };
  return (
    <div className="col-12 col-md-6 col-lg-4 p-lg-2 p-2">
      {/* <div className={styles.landingimage} style={cardStyle}>
        <h6 className={`fw-500 mb-0 ${styles.landingeventheading}`}>
          {title} <br />
          <span className="my-3">{region}</span>
        </h6>
      </div> */}
      {imageUrl ? (
        <div className={styles.landingimage} style={cardStyle}>
          <h6 className={`fw-500 mb-0 ${styles.landingeventheading}`}>
            {title} <br />
            <span className="my-3">{region}</span>
          </h6>
        </div>
      ) : (
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};
