import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import men from "../../public/Images/men.svg";
import plusicon from "../../public/Images/plusicon.svg";
import logo from "../../public/images/logo.svg";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
import styles from "../../styles/home.module.css";
import PlaceCardFull from "../components/PlaceCardFull";

const allTrips = [
  {
    id: "1",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, USA",
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
  },
  {
    id: "2",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, USA",
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
  },
  {
    id: "3",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, USA",
    bgImg:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
  },
  {
    id: "4",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, USA",
    bgImg:
      "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
  },
  {
    id: "5",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, USA",
    bgImg:
      "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
  },
  {
    id: "6",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
  },
  {
    id: "7",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
  },
  {
    id: "8",
    event: "Event",
    name: "Football Match LA FC vs NYC FC ",
    country: "New York, Pakistan",
    bgImg:
      "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
  },
];
const infinteScroll = ({
  recommendations,
  loading,
  error,
  fetchRecommendations,
}) => {
  const [titles, setTitles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // api
  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const recommendationData = recommendations.Recommendations || [];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredCards = recommendationData.filter((card) =>
      card.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredCards);
  };
  const rdata = searchResults;
  console.log(rdata, "rdata");

  return (
    <div>
      <div className="py-2 px-2">
        <div>
          <header className="container-fluid">
            <div
              className={`row d-flex align-items-center ${styles.headerhero}`}
            >
              {/* logo */}
              <div
                className={`col-xl-3 col-lg-3 col-md-3 col-sm-3  d-flex justify-content-center ${styles.logo}`}
              >
                <Link href="/">
                  <Image
                    width={270}
                    height={50}
                    className={styles.logoimage}
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
              {/* searchbar */}
              <Link
                href="/infinitescroll"
                className={`col-xl-6 col-lg-6 col-md-6 col-sm-6  ${styles.inputgroup}`}
              >
                <Form>
                  <FormControl
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    aria-describedby="button-addon5"
                    className={`form-control ${styles.searchvally}`}
                    list="itemList"
                  />
                  <datalist id="itemList">
                    {rdata.map((item) => (
                      <option key={item.id} value={item.title} />
                    ))}
                  </datalist>
                  <FontAwesomeIcon
                    className={styles.inputgroupicon}
                    icon={faSearch}
                  />
                </Form>
              </Link>
              {/* uploaes */}
              <div className="icons-right col-xl-3 col-lg-3 col-md-3 col-sm-3  d-flex justify-content-end align-items-center">
                <Image
                  width={50}
                  height={50}
                  src={plusicon}
                  alt="plusicon"
                  className={`mx-4 ${styles.plusicon}`}
                />
                <Image
                  width={50}
                  height={50}
                  src={men}
                  alt=""
                  className={`mx-3 ${styles.menicon}`}
                />
              </div>
            </div>
          </header>
        </div>
      </div>{" "}
      <div className="container px-5 pt-3 pb-5">
        <div className="row d-flex w-100">
          <h1 className="dark bold text-center">New York</h1>
          <p className="text-center mb-3 fw-500 pb-3 px-lg-5">
            Discover the world's top destinations and plan your next adventure
            with ease using <br /> Onroot's curated posts and itineraries
          </p>

          <div className="row p-0 m-0">
            {rdata?.map((item, index) => {
              return (
                <div className="col-lg-6 p-0 m-0">
                  <PlaceCardFull
                    key={index}
                    imageUrl={
                      item?.images
                        ? "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80"
                        : ""
                    }
                    itinerary="Itenerary"
                    title={item?.title}
                    place={item?.region}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default
const mapStateToProps = (state) => ({
  recommendations: state.recommendation.recommendations,
  loading: state.recommendation.loading,
  error: state.recommendation.error,
});

const mapDispatchToProps = {
  fetchRecommendations,
};

export default connect(mapStateToProps, mapDispatchToProps)(infinteScroll);
