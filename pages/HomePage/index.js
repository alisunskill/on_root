import React from "react";
import styles from "../../styles/home.module.css";
import newsletterimg from "../../public/images/card-two.svg";
import globe from "../../public/images/globe.svg";
import foodicon from "../../public/Images/foodicon.svg";
import cultureicon from "../../public/Images/cultureicon.svg";
import hikingicon from "../../public/images/hikingicon.svg";
import PostCard from "../../website/components/PostCards";
import Image from "next/image";
import Link from "next/link";
import NewsLetter from "../../website/components/NewsLetter";

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
  return (
    <>
      {/* filtered zone */}
      <div className={styles.landingcentral1}>
        <div className={`btn-group px-lg-4 ${styles.landingbuttondivs} `}>
          {/* 1 */}
          <button
            className={`btn btn-secondary btn-lg bg-light border-0 rounded-5 mb-0 fw-bold ${styles.landingbtncolor}`}
            type="button"
          >
            <Link
              passHref
              href="/singular"
              className={`text-decoration-none text-dark bg-light ${styles.filterbtn}`}
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

      <div
        className={`row px-4 d-flex justify-content-center align-items-center ${styles.landingendcard1}`}
      >
        {data.map((item, index) => {
          return (
            <PostCard
              key={index}
              imageUrl={item.bgImg}
              city={item.city}
              country={item.country}
            />
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

      <NewsLetter
        newsletterimg={newsletterimg}
        heading={"Subscribe to our Newsletter"}
        title={"Get Special Offers and more from Traveller"}
        para={
          "Subscribe to see secret deals prices drop the moment you sign up!"
        }
      />
    </>
  );
};
