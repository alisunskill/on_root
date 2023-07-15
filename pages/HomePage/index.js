import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import burger from "../../public/images/burger.svg";
import newsletterimg from "../../public/images/card-two.svg";
import globe from "../../public/images/globe.svg";
import painticon from "../../public/images/painticon.svg";
import travelicon from "../../public/images/travelicon.svg";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
import styles from "../../styles/home.module.css";
import NewsLetter from "../../website/components/NewsLetter";
import PostCard from "../../website/components/PostCards";
import RecommendationGrid from "../../website/components/RecommendationGrid";
import RangeSlider from "./RangeSlider";
import Sliders from "./Sliders";
// import Navbar from "../../components/Navbar";

const data1 = [
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1589506356380-33c39d65a6a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1588668968719-194c0fd13773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=947&q=80",
  },
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1589497836818-9ad2fa1df1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
  },
  {
    para: "Heavenly Expedition: Discovering the Beauty of Northern Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1589497836818-9ad2fa1df1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
  },
];

export default () => {
  const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const { recommendations, loading, error } = recommendationsData;

  // const loading = true;
  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  // api
  const [regionData, setRegion] = useState([]);
  const router = useRouter();
  const { region } = router.query;
  const { descriptor } = router.query;
  const [filteredData, setFilteredData] = useState([]);

  const recommendationData =
    (recommendations && recommendations.Recommendations) || [];
  useEffect(() => {
    setRegion(recommendationData);
  }, [regionData]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/recommendations?select=title,region")
  //     .then((response) => {
  //       const data = response.data;
  //       const regions = data.Recommendations;
  //       setRegion(regions);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    if (region) {
      axios
        .get(`http://localhost:8000/api/recommendations?region=${region}`)
        .then((response) => {
          const data = response.data;
          const cregion = data.Recommendations;
          setFilteredData(cregion);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [region]);

  const regionp = regionData.map((item) => {
    return item.region;
  });

  const regionDescriptor = regionData.map((item) => {
    return item.descriptor;
  });
  // region urls
  useEffect(() => {
    if (region) {
      const filteredRegionData = regionData.filter(
        (item) => item.region === region
      );
      setFilteredData(filteredRegionData);
    }
  }, [region, regionData]);
  // discripttors urls
  useEffect(() => {
    if (descriptor) {
      const filteredDescriptorData = regionData.filter(
        (item) => item.descriptor === descriptor
      );
      setFilteredData(filteredDescriptorData);
    }
  }, [descriptor, regionData]);

  const data = [
    {
      bgImg:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
      city: regionp[0],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1689072503598-638956beee7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=660&q=80",
      city: regionp[1],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1593593595698-de9e5f682a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=834&q=80",
      city: regionp[2],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1595112729465-942dafaa4e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80",
      city: regionp[2],
      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      city: regionp[1],

      country: "USA",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
      city: regionp[0],

      country: "USA",
    },
  ];
  // const region

  // api
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
    {/* <Navbar /> */}
      <div>
        {filteredData.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            {/* Render other card details */}
          </div>
        ))}
      </div>

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
              href="/infinitescroll"
              className={`text-decoration-none text-dark bg-light m-0 py-1 ${styles.filterbtn}`}
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
              {regionData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Dropdown.Item>
                      <Link
                        className="text-decoration-none text-dark"
                        href={{
                          pathname: "/infinitescroll",
                          query: { region: item.region },
                        }}
                      >
                        {item.region}
                      </Link>
                    </Dropdown.Item>
                  </React.Fragment>
                );
              })}
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
            <Dropdown.Menu className={styles.rangehero}>
              <RangeSlider />
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
              Descriptor
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link
                className="text-decoration-none text-dark  px-3 py-2"
                href={{
                  pathname: "/infinitescroll",
                  query: { descriptor: regionDescriptor[0] },
                }}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Food</span>
                <Image
                  className={`h-auto ${styles.foodIcons}`}
                  src={burger}
                  alt=""
                />
              </Link>
              <Link
                className="text-decoration-none text-dark  px-3 py-2"
                href={{
                  pathname: "/infinitescroll",
                  query: { descriptor: regionDescriptor[1] },
                }}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {" "}
                <span>Hiking</span>
                <Image
                  className={`h-auto ${styles.foodIcons}`}
                  src={travelicon}
                  alt=""
                />
              </Link>
              <Link
                href={{
                  pathname: "/infinitescroll",
                  query: { descriptor: regionDescriptor[3] },
                }}
                className="text-decoration-none text-dark px-3 py-2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {" "}
                <span>Art</span>
                <Image
                  className={`h-auto ${styles.foodIcons}`}
                  src={painticon}
                  alt=""
                />
              </Link>
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
          <RecommendationGrid />
        </div>
        <div className="col-lg-4">
          <Image className={styles.globe} src={globe} alt="globe" />
          {/* <GlobeMap /> */}
        </div>
      </div>

      <div className="row">
        <div className={`col-lg-12 ${styles.landingcentral}`}>
          <Link
            href="/infinitescroll"
            className={`${styles.landingnextbutton} text-decoration-none fw-600`}
          >
            View More
          </Link>
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
        className={`row  px-lg-6 d-flex justify-content-center align-items-center ${styles.landingendcard1}`}
      >
        {data.map((item, index) => {
          return (
            <PostCard
              key={index}
              imageUrl={item.bgImg}
              city={item.city}
              // country={item.country}
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
