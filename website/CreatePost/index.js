import React from "react";
import styles from "../../styles/post.module.css";
export default () => {
  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h1 className={styles.signupheading}>Create a Post</h1>
          <p className="pt-4 fw-500">
            Discover the world's top destinations and plan your next adventure
            with ease using
            <br /> Onroot's curated posts and itineraries
          </p>
          <div className="row pt-3">
            <div
              className={` col-12 col-md-6 col-lg-6    ${styles.post_card_wrapper}`}
            >
              <div className={styles.post_central}>Itinerary</div>
            </div>

            <div
              className={` col-12 col-md-6 col-lg-6    ${styles.post_card_wrapper}`}
            >
              <div className={styles.post_central}>Single Event</div>
            </div>
          </div>
          <br /> <br />
          <div className="text-light text-center">
            <button className="savebtn">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};
