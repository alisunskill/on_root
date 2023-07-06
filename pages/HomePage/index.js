import React, { useState } from "react";
import styles from "../../styles/home.module.css";
import newsletterimg from "../../public/images/card-two.svg";
import globe from "../../public/images/globe.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCard from "../../website/components/PostCards";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import Sliders from "./Sliders";
// import RangeSlider from "./RangeSlider"
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

const data1 = [
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1048&q=80",
  },
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1588994581963-a854ade7c598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
  },
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
  },
];

export default () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      {/* filtered zone */}
      <div className={styles.landingcentral1}>
        <div className={`btn-group px-2 ${styles.landingbuttondivs} `}>
          {/* 1 */}
          <button
            className={`btn btn-secondary btn-lg bg-light d-flex align-center border-0 rounded-5 mb-0 fw-bold ${styles.landingbtncolor}`}
            type="button"
          >
            <Link
              passHref
              href="/singular"
              className={`text-decoration-none text-dark bg-light m-0 p-0 ${styles.filterbtn}`}
            >
              Filter by
            </Link>
          </button>
        </div>
        {/* 2 */}
        <div className="btn-group px-2">
          <Dropdown>
            <Dropdown.Toggle
              className={`btn btn-light rounded-5 ${styles.filterbtn}`}
              variant="primary"
              id="dropdown-basic"
            >
              Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* 3 */}
        <div className="btn-group px-2">
          <Dropdown>
            <Dropdown.Toggle
              className={`btn btn-light rounded-5 ${styles.filterbtn}`}
              variant="primary"
              id="dropdown-basic"
            >
              Price
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                {" "}
                <div className="w-100">{/* <RangeSlider /> */}</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* 4 */}
        <div className={`btn-group px-2`}>
          <Dropdown>
            <Dropdown.Toggle
              className={`btn btn-light rounded-5 ${styles.filterbtn}`}
              variant="primary"
              id="dropdown-basic"
            >
              Discriptor
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
              <Dropdown.Item href="/login">Login</Dropdown.Item>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/infopage">Information Page</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div
        className={`row  ${styles.globalhero}`}
        style={{ marginBottom: "20px;" }}
      >
        {/* Events Zone */}
        <div className={`col-lg-8 p-0`}>
          <div className={`container-fluid`}>
            <div className={`row`}>
              {/* football match */}

              <div className={`col-lg-4 ${styles.landingfirstcard}`}>
                <Link href="/infopage" className="text-decoration-none">
                  <div className={styles.landingimage1}>
                    <div className={`col-lg-12 ${styles.landingtext}`}>
                      <p className={`mb-0 letter-spac ${styles.letterspac}`}>
                        Event
                      </p>
                      <p
                        className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                      >
                        {" "}
                        Football Match LA FC vs NYC FC{" "}
                      </p>
                      <p className={`mb-0 m1`}>New York, USA</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* 2tour */}
              <div className={`col-lg-5`}>
                <div className={`row`}>
                  <div className={`col-lg-12  ${styles.luxuryrow}`}>
                    <Link href="/infopage" className="text-decoration-none">
                      <div
                        className={`${styles.landingimage2} d-flex align-center light-dark`}
                      >
                        <div
                          className={`col-lg-12 ${styles.landingtextmidgrid}`}
                        >
                          <p
                            className={`mb-0 letter-spac ${styles.letterspac}`}
                          >
                            ITINERARY
                          </p>
                          <p
                            className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                          >
                            {" "}
                            PARIS LUXURY TOUR{" "}
                          </p>
                          <p className={`mb-0`}>Paris, France</p>
                        </div>
                      </div>
                    </Link>

                    <Link href="/infopage" className="text-decoration-none">
                      <div
                        className={`${styles.landingimage3} d-flex align-center my-4 light-dark`}
                      >
                        <div
                          className={`col-lg-12 ${styles.landingtextmidgrid}`}
                        >
                          <p
                            className={`mb-0 letter-spac ${styles.letterspac}`}
                          >
                            ITINERARY
                          </p>
                          <p
                            className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                          >
                            {" "}
                            PARIS LUXURY TOUR{" "}
                          </p>
                          <p className={`mb-0 m1`}>Paris, France</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/infopage" className="text-decoration-none">
                      <div
                        className={`${styles.landingimage4} d-flex align-center light-dark`}
                      >
                        <div
                          className={`col-lg-12 ${styles.landingtextmidgrid}`}
                        >
                          <p
                            className={`mb-0 letter-spac ${styles.letterspac}`}
                          >
                            ITINERARY
                          </p>
                          <p
                            className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                          >
                            {" "}
                            PARIS LUXURY TOUR{" "}
                          </p>
                          <p className={`mb-0 m1`}>Paris, France</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 3rd tour */}
              <div className={`col-lg-3`}>
                <div className={`row`}>
                  <Link
                    href="/infopage"
                    className="text-decoration-none m-0 p-0"
                  >
                    <div className={`col-lg-12 p-0`}>
                      <div
                        className={`${styles.landingimage5} d-flex align-center p-0 m-0`}
                      >
                        <div
                          className={`col-lg-12 mb-0 p-0 ${styles.landingtextmidgrid} light-dark d-flex align-center flex-column flex-center`}
                          style={{ height: "100%", borderRadius: "55px" }}
                        >
                          <p
                            className={`mb-0 letter-spac ${styles.letterspac}`}
                          >
                            EVENT
                          </p>
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
                  </Link>

                  <Link
                    href="/infopage"
                    className="text-decoration-none m-0 p-0"
                  >
                    <div className={`${styles.landingimage6} my-4`}>
                      <div
                        className={`col-lg-12 ${styles.landingtextinalgrid}`}
                      >
                        <p className={`mb-0 letter-spac ${styles.letterspac}`}>
                          ITINERARY
                        </p>
                        <p
                          className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                        >
                          Tokyo Night Run
                        </p>
                        <p className={`mb-0 m1`}>Paris, France</p>
                      </div>
                    </div>
                  </Link>
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
        <h3 className={`mb-0 ${styles.landingendheading}`}>Top Destinations</h3>
      </div>
      <div className={styles.landingdivsubheading}>
        <p className={`${styles.landingsubheading} mb-0`}>
          Discover the world's top destinations and plan your next adventure
          with ease using <br /> Onroot's curated posts and itineraries
        </p>
      </div>

      <div
        className={`row  px-lg-4 d-flex justify-content-center align-items-center ${styles.landingendcard1}`}
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

      <Slider {...settings}>
        {data1.map((item, index) => {
          return (
            <Sliders
              key={index}
              para={item.para}
              bgimg={item.bgImg}
              settings={settings}
            />
          );
        })}
      </Slider>

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
