import React from "react";
import styles from "../../styles/profile.module.css";

export default () => {
  return (
    <div className={styles.cyclebg}>
      <div className={styles.cyclehero}>
        <h1>Sorry to see you go!</h1>
        <div className="d-flex justify-content-around gap-3">
          <button type="" className={styles.signupbtns} >
          Back to Home
          </button>
          <button className={styles.signupbtns} type="">
          Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
