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
import filter from "../../public/images/filter.svg";
import painticon from "../../public/images/painticon.svg";
import travelicon from "../../public/images/travelicon.svg";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
import styles from "../../styles/home.module.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import NewsLetter from "../../website/components/NewsLetter";
import Form from "react-bootstrap/Form";
import RecommendationGrid from "../../website/components/RecommendationGrid";
import RangeSlider from "./RangeSlider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Modal from "react-bootstrap/Modal";

export default ({data1}) => {
  console.log(data1,'data');
  const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const [searchTerm, setSearchTerm] = useState("");
  const { recommendations, loading, error } = recommendationsData;
  const [modalShow, setModalShow] = React.useState(false);

  // const loading = true;
  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("searchTerm");
      setSearchTerm(storedValue);
    }
  }, [searchTerm]);

  // api
  const [regionData, setRegion] = useState([]);
  const router = useRouter();
  const { region } = router.query;
  const { descriptor } = router.query;
  const [filteredData, setFilteredData] = useState([]);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
  const recommendationData =
    (recommendations && recommendations.Recommendations) || [];
  useEffect(() => {
    setRegion(recommendationData);
  }, [regionData]);

  const regionp = regionData.map((item) => {
    return item.region;
  });
  const data = [
    {
      bgImg:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1689072503598-638956beee7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=660&q=80",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1593593595698-de9e5f682a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=834&q=80",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1595112729465-942dafaa4e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  ];
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

  const handleRegionChange = (region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((r) => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };
  return (
    <>
      {!searchTerm.length > 0 && (
        <div>
          <div>
            {filteredData.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
          <div
            className={`d-flex align-content-center ${styles.filterhero}`}
            onClick={() => setModalShow(true)}
          >
            <h6 className="fw-600 mb-0">Filters</h6>{" "}
            <Image width={30} height={20} src={filter} alt="filter" />
          </div>

          {/* Modal */}
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter " className="amgray text-center w-100 fw-600">
                Filters
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-lg-5 px-3">
              {/* region */}
              <h5 className="amgray">Region</h5>
              <div className="d-flex gap-3 flex-wrap">
                <RadioGroup
                  aria-label="radio-buttons"
                  name="radio-buttons"
                  value={selectedValue}
                  onChange={handleChange}
                  className="d-flex flex-row"
                >
                  {regionData.map((item, index) => (
                    <div key={index} className={styles.regionbox}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedRegions.includes(item.region)}
                            onChange={() => handleRegionChange(item.region)}
                          />
                        }
                        label={
                          <Link
                            className="text-decoration-none text-dark w-100"
                            href={{
                              pathname: "/infinitescroll",
                              query: { region: item.region },
                            }}
                          >
                            {item.region}
                          </Link>
                        }
                      />
                    </div>
                  ))}
                </RadioGroup>
              </div>
              {/* distance */}
              <h5 className="amgray py-3">Distance from location</h5>

              <div className="row w-100 p-0 mb-4">
                <div className="col-lg-3">
                  <Form.Control
                    className="rounded-5"
                    type="text"
                    placeholder="Miles"
                  />
                </div>
                <div className="col-lg-9">
                  <Form.Control
                    className="rounded-5"
                    type="text"
                    placeholder="from address"
                  />
                </div>
              </div>
              {/* category */}
              <h5 className="amgray">Categories</h5>
              <div className="d-flex gap-3 flex-wrap">
                <RadioGroup
                  aria-label="radio-buttons"
                  name="radio-buttons"
                  value={selectedValue}
                  onChange={handleChange}
                  className="d-flex flex-row"
                >
                  {regionData.map((item, index) => (
                    <div key={index} className={styles.regionbox}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedRegions.includes(item.title)}
                            onChange={() => handleRegionChange(item.title)}
                          />
                        }
                        label={
                          <Link
                            className="text-decoration-none text-dark w-100"
                            href={{
                              pathname: "/infinitescroll",
                              query: { region: item.title },
                            }}
                          >
                            {item.title}
                          </Link>
                        }
                      />
                    </div>
                  ))}
                </RadioGroup>
              </div>
              {/* keywords */}
              <h5 className="amgray mt-3">Keyword(s)</h5>

              <div className="py-3 ">
                <Form.Control
                  className="rounded-5"
                  type="text"
                  placeholder="ie. Surf"
                />
              </div>

              <div className="d-flex justify-content-center gap-3 mb-3 py-3">
                <button type="" className="savebtn">
                  Reset
                </button>{" "}
                <button type="" className="savebtn">
                  Appply
                </button>
              </div>
            </Modal.Body>
          </Modal>

          {/* filtered zone */}
          <div className={styles.landingcentral1}>
            <div className={`btn-group px-2 ${styles.landingbuttondivs} `}>
              {/* 1 */}

              <button
                className={`btn btn-secondary btn-lg bg-light d-flex align-center border-0 rounded-5 mb-0 fw-bold ${styles.landingbtncolor}`}
                type="button"
              >
                <div
                  className={`text-decoration-none cursor-arrow text-dark bg-light m-0 py-1 ${styles.filterbtn}`}
                >
                  Filter by
                </div>
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

                <Dropdown.Menu className={styles.menuhero}>
                  {regionData.map((item, index) => {
                    return (
                      <div key={index}>
                        <Dropdown.Item>
                          <Link
                            className="text-decoration-none text-dark w-100"
                            href={{
                              pathname: "/infinitescroll",
                              query: { region: item.region },
                            }}
                          >
                            {item.region}
                          </Link>
                        </Dropdown.Item>
                      </div>
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
                    className={`text-decoration-none text-dark  px-3 py-2 ${styles.descripthero}`}
                    href={{
                      pathname: "/infinitescroll",
                      query: { descriptor: "food" },
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
                    className={`text-decoration-none text-dark  px-3 py-2 ${styles.descripthero}`}
                    href={{
                      pathname: "/infinitescroll",
                      query: { descriptor: "Hiking" },
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
                      query: { descriptor: "Art" },
                    }}
                    className={`text-decoration-none text-dark  px-3 py-2 ${styles.descripthero}`}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
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
            <div className={`col-lg-12 p-0`}>
              <RecommendationGrid data={recommendationData} />
            </div>

            <div className="row pt-lg-5 pt-5 pb-3">
              <div className="col-12  pt-4 text-center">
                <h5 className="fw-500">
                  Oops, looks like there’s no more to show.
                </h5>
                <br />
                <h5 className="fw-500">
                  Try searching for another destination or make a post of your
                  own!
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};




