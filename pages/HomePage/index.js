import React from "react";
// import "./mainstyle.css";
import styles from "../../styles/home.module.css";
import globe from "../../public/images/globe.svg";
import foodicon from "../../public/Images/foodicon.svg";
import cultureicon from "../../public/Images/cultureicon.svg";
import hikingicon from "../../public/images/hikingicon.svg";
import newsletter from "../../public/images/card-two.svg";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "California",
    country: "USA",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "California",
    country: "USA",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "California",
    country: "USA",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "California",
    country: "USA",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "California",
    country: "USA",
  },
  {
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    city: "California",
    country: "USA",
  },
];
export default () => {
  const [{ bgImg }] = data;
  const imageUrl = bgImg;
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRpeat: "no-repeat",
    borderRadius: "20px",
  };
  return (
    <>
      {/* filtered zone */}
      <div className={styles.landingcentral1}>
        <div className={`btn-group px-lg-4 ${styles.landingbuttondivs} `}>
          {/* 1 */}
          <button
            className={`btn btn-secondary btn-lg  mb-0 fw-bold ${styles.landingbtncolor}`}
            type="button"
          >
            <Link
              passHref
              href="/singular"
              className="text-decoration-none text-dark"
            >
              Filter by
            </Link>
          </button>
        </div>
        {/* 2 */}
        <div className="btn-group px-lg-4">
          <button
            type="button"
            className="btn btn-light rounded-5 dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Link href="/infopage" className="text-decoration-none text-dark">
              Region
            </Link>
          </button>
          <div className="dropdown-menu">
            <Link className="dropdown-item" passHref href="/SigularEvents">
              Region
            </Link>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <div className={`dropdown-divider`}></div>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>

        {/* 3 */}
        <div className="btn-group px-lg-4">
          <button
            type="button"
            className={`btn btn-light rounded-5 dropdown-toggle`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Price
          </button>
          <div className={`dropdown-menu`}>
            <a className={`dropdown-item`} href="#">
              Region
            </a>
            <a className={`dropdown-item`} href="#">
              Another action
            </a>
            <a className={`dropdown-item`} href="#">
              Something else here
            </a>
            <div className={`dropdown-divider`}></div>
            <a className={`dropdown-item`} href="#">
              Separated link
            </a>
          </div>
        </div>
        {/* 4 */}
        <div className={`btn-group`}>
          <button
            type="button"
            className={`btn btn-light rounded-5 dropdown-toggle`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Discriptor
          </button>
          <div className={`dropdown-menu`}>
            <a className={`dropdown-item`} href="#">
              Region
            </a>
            <a className={`dropdown-item`} href="#">
              Another action
            </a>
            <a className={`dropdown-item`} href="#">
              Something else here
            </a>
            <div className={`dropdown-divider`}></div>
            <a className={`dropdown-item`} href="#">
              Separated link
            </a>
          </div>
        </div>
      </div>
      <div className={`row globalhero`} style={{ marginBottom: "20px;" }}>
        {/* Events Zone */}
        <div className={`col-lg-8`}>
          <div className={`container`}>
            <div className={`row`}>
              {/* football match */}
              <div className={`col-lg-4 ${styles.landingfirstcard}`}>
                <div className={styles.landingimage1}>
                  <div className={`col-lg-12 ${styles.landingtext}`}>
                    <p className={`mb-0 ${styles.letterspac}`}>Event</p>
                    <p
                      className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                    >
                      {" "}
                      Football Match LA FC vs NYC FC{" "}
                    </p>
                    <p className={`mb-0 m1`}>New York, USA</p>
                  </div>
                </div>
              </div>

              {/* 2tour */}
              <div className={`col-lg-5`}>
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
              <div className={`col-lg-3`}>
                <div className={`row`}>
                  <div className={`col-lg-12`}>
                    <div
                      className={`${styles.landingimage5} d-flex align-center`}
                    >
                      <div
                        className={`col-lg-12 ${styles.landingtextmidgrid} light-dark d-flex align-center flex-column flex-center`}
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
                      <p
                        className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                      >
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
        <div className="col-lg-4">
          <Image className={styles.globe} src={globe} alt="globe" />
        </div>
      </div>

      <div className="row">
        <div className={`col-lg-12 ${styles.landingcentral}`}>
          <button href="#" className={`${styles.landingnextbutton} fw-600`}>
            View More
          </button>
        </div>
      </div>
      <div className={styles.landingdivendheading}>
        <p className={`mb-0 ${styles.landingendheading}`}>Top Destinations</p>
      </div>
      <div className={styles.landingdivsubheading}>
        <p className={`${styles.landingsubheading} mb-0`}>
          Discover the world's top destinations and plan your next adventure
          with ease using <br /> Onroot's curated posts and itineraries
        </p>
      </div>

      <div className={`row ${styles.landingendcard1}`}>
        {data.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4 p-3">
              <div className={styles.landingimage} style={cardStyle}>
                <h6 className={`fw-400 mb-0 ${styles.landingeventheading}`}>
                  {item.city} <br />
                  <span className={`my-3`}>{item.country}</span>
                </h6>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />

      <div className={`row`}>
        <div className={`col-12 col-md-12 col-lg-12 p-0`}>
          <div
            className={`container-fluid d-flex justify-content-end align-items-center flex-column ${styles.bghut}`}
          >
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div
                  className={`${styles.landingiconcenter} d-flex justify-content-center gap-3 mb-4`}
                >
                  <div className={styles.landingicon1}>
                    <Image
                      src={foodicon}
                      alt=""
                      className={styles.landingsection3icon}
                    />
                  </div>
                  <br />
                  <div className={styles.landingicon1}>
                    <Image
                      src={cultureicon}
                      alt=""
                      className={styles.landingsection3icon}
                    />
                  </div>
                  <br />
                  <div className={styles.landingicon1}>
                    <Image
                      src={hikingicon}
                      alt=""
                      className={styles.landingsection3icon}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.landingsection3content} pb-5 fw-600`}>
              <h5 className={`mb-0 fw-600`}>
                Heavenly Expedition: Discovering the Beauty of Northern Pakistan
              </h5>
              <h5 className={`mb-0 fw-600`}>Skardu, Pakistan</h5>
            </div>
          </div>
        </div>
      </div>

      {/* subscribe newsletter */}

      <div className={`pt-3`}>
        <h3 className={`mb-0 fw-700 text-center ${styles.newsletter}`}>
          Subscribe to our Newsletter
        </h3>

        <div className={` mt-4 pt-2 m-5 ${styles.landingcontainer}`}>
          <div className="row border rounded-5">
            <div
              className={`col-lg-6 ${styles.landingsection2leftcontainer} p-0`}
            >
              <Image
                src={newsletter}
                alt=""
                className={styles.landingnewsletterimage}
              />
            </div>

            <div className="col-lg-6 d-flex flex-column align-center justify-content-center">
              <div className={`${styles.offerbox} text-center`}>
                <h4 className="mb-0 fw-600">
                  Get Special Offers and more from Traveller
                </h4>
                <p className={`mb-0 ${styles.textgrey} mt-3`}>
                  Subscribe to see secret deals prices drop the moment you sign
                  up!
                </p>
                <div className="d-flex border w-100 justify-content-between px-1 rounded-5 mt-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className={`${styles["landinginput1"]} ${styles["input1"]}`}
                  />
                  <a
                    style={{ textDecoration: "none" }}
                    href="#"
                    className={styles.landingbtnlast}
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
