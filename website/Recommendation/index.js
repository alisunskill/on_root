import React from "react";
import styles from "../../styles/home.module.css";
import paint from "../../public/images/paint.svg";
import burger from "../../public/images/blackburger.svg";
import Image from "next/image";

export default () => {
  return (
    <div>
      <div className="container px-5 pt-3 pb-5">
        <div className={`row`}>
          <h1 className="dark bold pb-3 text-center mb-3">Your Recommendations</h1>
          {/* football match */}
          <div className={`col-4 ${styles.landingfirstcard}`}>
            <div className={styles.landingimage1}>
              <div
                className={`position-relative d-flex flex-column justify-content-center align-center  ${styles.landingtext}`}
              >
                <div className={`grid ${styles.herogrid}`}>
                  <div
                    className={`d-flex justify-content-center align-center ${styles.paintgoal}`}
                  >
                    <Image src={burger} width={40} height={40} />
                  </div>
                  <div
                    className={`d-flex justify-content-center align-center mt-3 ${styles.paintgoal}`}
                  >
                    <Image src={paint} width={40} height={40} />
                  </div>
                </div>

                <p className={`mb-0 ${styles.letterspac}`}>Event</p>
                <h3 className={`mb-0   white fw-600 pb-5${styles.matchheader}`}>
                  {" "}
                  Football Match LA FC vs NYC FC{" "}
                </h3>
                <p className={`mb-0 m1`}>New York, USA</p>
              </div>
            </div>
          </div>

          {/* 2tour */}
          <div className="col-5 ">
            <div className={`row`}>
              <div className={`col-lg-12`}>
                <div
                  className={`${styles.landingimage2} d-flex align-center light-dark`}
                >
                  <div className={`col-lg-12 ${styles.landingtextmidgrid}`}>
                    <p className={`mb-0 ${styles.letterspac}`}>ITINERARY</p>
                    <p
                      className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                    >
                      {" "}
                      PARIS LUXURY TOUR{" "}
                    </p>
                    <p className={`mb-0`}>Paris, France</p>
                  </div>
                </div>
                <div
                  className={`${styles.landingimage3} d-flex align-center my-4 light-dark`}
                >
                  <div
                    className={`col-lg-12 px-5 ${styles.landingtextmidgrid}`}
                  >
                    <p className={`mb-0 ${styles.letterspac}`}>ITINERARY</p>
                    <h3
                      className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                    >
                      {" "}
                      Heavenly Expedition: Discovering the Beauty of Northern
                      Pakistan{" "}
                    </h3>
                    <p className={`mb-0 m1`}>Paris, France</p>
                  </div>
                </div>
                <div
                  className={`${styles.landingimage4} d-flex align-center light-dark`}
                >
                  <div className={`col-lg-12 ${styles.landingtextmidgrid}`}>
                    <p className={`mb-0 ${styles.letterspac}`}>ITINERARY</p>
                    <p
                      className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                    >
                      {" "}
                      PARIS LUXURY TOUR{" "}
                    </p>
                    <p className={`mb-0 m1`}>Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd tour */}
          <div className="col-3">
            <div className={`row`}>
              <div className={`col-lg-12 mx-0 px-0`}>
                <div className={`${styles.landingimage5} d-flex align-center`}>
                  <div
                    className={`col-lg-12 ${styles.landingtextmidgrid}  light-dark d-flex align-center flex-column flex-center`}
                    style={{ height: "100%", borderRadius: "20px" }}
                  >
                    <p className={`mb-0 ${styles.letterspac}`}>EVENT</p>
                    <p
                      className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                    >
                      {" "}
                      Tokyo Night Run{" "}
                    </p>
                    <p className={`mb-0 m1`}>Tokyo, Japan</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.landingimage6} my-4`}>
                <div className={`col-lg-12 ${styles.landingtextinalgrid}`}>
                  <p className={`mb-0 ${styles.letterspac}`}>ITINERARY</p>
                  <p className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}>
                    Tokyo Night Run
                  </p>
                  <p className={`mb-0 m1`}>Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
