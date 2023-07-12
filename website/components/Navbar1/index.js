import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import men from "../../../public/Images/men.svg";
import plusicon from "../../../public/Images/plusicon.svg";
import logo from "../../../public/images/logo.svg";
import { fetchRecommendations } from "../../../store/actions/recommendationActions";
import styles from "../../../styles/home.module.css";

const Navbar1 = (
  recommendations,
  loading,
  error,
  fetchRecommendations
) => {
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
      {/* navbar */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar1);
