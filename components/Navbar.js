import React, { useState, useEffect } from "react";
import logo from "../public/images/logo.svg";
import men from "../public/Images/men.svg";
import plusicon from "../public/Images/plusicon.svg";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import axios from "axios";
import { connect } from "react-redux";
import { fetchRecommendations } from "../store/actions/recommendationActions";

// const items = [
//   {
//     id: "1",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, USA",
//     bgImg:
//       "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
//   },
//   {
//     id: "2",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, USA",
//     bgImg:
//       "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
//   },
//   {
//     id: "3",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, USA",
//     bgImg:
//       "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
//   },
//   {
//     id: "4",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, USA",
//     bgImg:
//       "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
//   },
//   {
//     id: "5",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, USA",
//     bgImg:
//       "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
//   },
//   {
//     id: "6",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, Pakistan",
//     bgImg:
//       "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
//   },
//   {
//     id: "7",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, Pakistan",
//     bgImg:
//       "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
//   },
//   {
//     id: "8",
//     event: "Event",
//     name: "Football Match LA FC vs NYC FC ",
//     country: "New York, Pakistan",
//     bgImg:
//       "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
//   },
// ];

const Navbar = ({
   recommendations, loading, error, fetchRecommendations 
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
    <>
      <div>
        <header className="container-fluid">
          <div className={`row d-flex align-items-center ${styles.headerhero}`}>
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
            <Searchbar data={recommendationData} />

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
    </>
  );
};

// export default Navbar;
const mapStateToProps = (state) => ({
  recommendations: state.recommendation.recommendations,
  loading: state.recommendation.loading,
  error: state.recommendation.error,
});

const mapDispatchToProps = {
  fetchRecommendations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
