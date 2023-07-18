import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchRecommendations } from "../store/actions/recommendationActions";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import { searchData } from "../store/actions/recommendationActions";

const Searchbar = () => {
  const router = useRouter();
  const region = router.query.region?.toLowerCase();
  const descriptor = router.query.descriptor?.toLowerCase();
  // redux
  const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const { recommendations, loading, error } = recommendationsData;

  // const loading = true;
  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  useEffect(() => {
    setPosts(filteredPosts);
    setHasMore(false);
  }, [router.query.region]);

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  console.log(searchTerm, "searchTerm");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    const newPosts = recommendationData.slice(startIndex, endIndex);

    if (newPosts.length > 0) {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    const filteredCards = posts.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredCards);
  }, [searchTerm, posts]);

  // api
  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  const recommendationData = recommendations.Recommendations || [];

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredRecommendations = recommendationData.filter((item) =>
      item.region.toLowerCase().includes(value.toLowerCase())
    );

    console.log(filteredRecommendations);
    dispatch(searchData(filteredRecommendations));

    setPosts(filteredRecommendations);
    setShowAll(false);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // keypress enter for search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const filteredCards = posts.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredCards);
      setShow(false);
      router.push(`/infinitescroll?region=${encodeURIComponent(searchTerm)}`);
    }
  };
  // current post
  const filteredPosts = recommendationData.filter(
    (post) => post.region.toLowerCase() === region
  );

  // current Descriptor
  const filtereDescriptor = recommendationData.filter(
    (post) => post.descriptor.toLowerCase() === descriptor
  );

  useEffect(() => {
    setPosts(filtereDescriptor);
    setHasMore(false);
  }, [router.query.descriptor]);

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1663583784667-4a2a386fec62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1622397815608-359540676c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1550850839-8dc894ed385a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1587162146766-e06b1189b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=956&q=80",
    },
  ];
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div
        className={`col-xl-5 col-lg-5 col-md-5 col-sm-5  ${styles.inputgroup}`}
      >
        <Form>
          <FormControl
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
            aria-describedby="button-addon5"
            className={`form-control ${styles.searchvally}`}
            list="itemList"
          />
          <datalist id="itemList">
            {itemData.map((item) => (
              <option key={item.id} value={item.title} />
            ))}
          </datalist>
          <FontAwesomeIcon className={styles.inputgroupicon} icon={faSearch} />
        </Form>
      </div>
      {show && (
        <div>
          {searchTerm && (
            <div>
              <div className="container-fluid px-5 pt-3 pb-5">
                <div className="row d-flex w-100">
                  {searchTerm !== "" && (
                    <>
                      <h1 className="dark bold text-center fw-600">New York</h1>
                      <p className="text-center mb-3 fw-500 pb-3 px-lg-5">
                        Discover the world's top destinations and plan your next
                        adventure with ease using <br /> Onroot's curated posts
                        and itineraries
                      </p>
                    </>
                  )}
                  <InfiniteScroll
                    className="w-100 overflow-hidden"
                    dataLength={searchResults.length || posts.length}
                    next={recommendationData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                  >
                    <Box>
                      {/* {searchTerm !== "" ? (
                      <Masonry columns={3} spacing={2}>
                        {(filteredPosts.length > 0
                          ? filteredPosts
                          : searchResults.length > 0
                          ? searchResults
                          : posts
                        ).map((item, index) => (
                          <div key={index}>
                            <Link
                              href="/infopage"
                              style={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: "0.9",
                              }}
                            >
                              <img
                                layout="fill"
                                objectFit="cover"
                                src={`${
                                  itemData[index % itemData.length].img
                                }?w=162&auto=format`}
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                alt={item.region}
                                loading="lazy"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  borderRadius: "15px",
                                  opacity: "0.99990000999",
                                }}
                              />
                              <div
                                style={{ position: "absolute", zIndex: 9999 }}
                              >
                                <h3 className="w-700 text-white">
                                  {" "}
                                  {item.region}
                                </h3>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </Masonry>
                    ) : searchTerm !== "" ? (
                      <Masonry columns={3} spacing={2}>
                        {(filtereDescriptor.length > 0
                          ? filtereDescriptor
                          : searchResults.length > 0
                          ? searchResults
                          : posts
                        ).map((item, index) => (
                          <div key={index}>
                            <Link
                              href="/infopage"
                              style={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: "0.9",
                              }}
                            >
                              <img
                                layout="fill"
                                objectFit="cover"
                                src={`${
                                  itemData[index % itemData.length].img
                                }?w=162&auto=format`}
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                alt={item.region}
                                loading="lazy"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  borderRadius: "15px",
                                  opacity: "0.99990000999",
                                }}
                              />
                              <div
                                style={{ position: "absolute", zIndex: 9999 }}
                              >
                                <h3 className="w-700 text-white">
                                  {" "}
                                  {item.descriptor}
                                </h3>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </Masonry>
                    ) : (
                    
                      ""
                    )} */}
                      <Masonry columns={3} spacing={2}>
                        {(showAll
                          ? filteredPosts.length > 0
                            ? filteredPosts
                            : searchResults.length > 0
                            ? searchResults
                            : posts
                          : filteredPosts.length > 0
                          ? filteredPosts.slice(0, 2) // Display only the first two items
                          : searchResults.length > 0
                          ? searchResults.slice(0, 2) // Display only the first two items
                          : posts.slice(0, 2)
                        ) // Display only the first two items
                          .map((item, index) => (
                            <div key={index}>
                              <Link
                                href="/infopage"
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  opacity: "0.9",
                                }}
                              >
                                <img
                                  layout="fill"
                                  objectFit="cover"
                                  src={`${
                                    itemData[index % itemData.length].img
                                  }?w=162&auto=format`}
                                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                  alt={item.region}
                                  loading="lazy"
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    borderRadius: "15px",
                                    opacity: "0.99990000999",
                                  }}
                                />
                                <div
                                  style={{ position: "absolute", zIndex: 9999 }}
                                >
                                  <h3 className="w-700 text-white">
                                    {" "}
                                    {item.region}
                                  </h3>
                                </div>
                              </Link>
                            </div>
                          ))}
                      </Masonry>
                    </Box>
                  </InfiniteScroll>
                  {!showAll && (
                    <div className="text-center mt-3">
                      <button
                        onClick={toggleShowAll}
                        className="btn text-light bold"
                        style={{ background: "#7CC5E5" }}
                      >
                        Show All
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendation.recommendations,
  loading: state.recommendation.loading,
  error: state.recommendation.error,
});

const mapDispatchToProps = {
  fetchRecommendations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
