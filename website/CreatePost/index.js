import React from "react";
import styles from "../../styles/post.module.css";
export default () => {
  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h1 className={`${styles.signupheading} fw-600`}>Create a Post</h1>
          <p className="pt-4 fw-500">
            Discover the world's top destinations and plan your next adventure
            with ease using
            <br /> Onroot's curated posts and itineraries
          </p>
          <div className="row pt-3 justify-content-center">
            <div
              className={` col-12 col-md-6 col-lg-5    ${styles.post_card_wrapper}`}
            >
              <div className={`${styles.post_central} `}>
                <h3 className="savebtn2 fw-600 px-4">Itinerary</h3>
              </div>
            </div>

            <div
              className={` col-12 col-md-6 col-lg-5    ${styles.post_card_wrapper}`}
            >
              <div className={`${styles.post_central1} `}>
                <h3 className="savebtn2 fw-600 px-4">Event</h3>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="text-light text-center">
            <button className="savebtn1">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};
