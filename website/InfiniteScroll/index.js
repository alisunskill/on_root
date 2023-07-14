import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect, useDispatch, useSelector } from "react-redux";
import men from "../../public/Images/men.svg";
import plusicon from "../../public/Images/plusicon.svg";
import logo from "../../public/images/logo.svg";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
import styles from "../../styles/home.module.css";

const InfiniteScrollComponent = () => {
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

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    // Replace this with your static data array or import from a separate file
    const staticPosts = [
      {
        id: 1,
        title: "Post 1",
        body: "Lorem ipsum dolor sit amet.",
        img: "https://images.unsplash.com/photo-1689126494042-39f69fa4c8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      },
      {
        id: 2,
        title: "Post 2",
        body: "Consectetur adipiscing elit.",
        img: "https://images.unsplash.com/photo-1689126494042-39f69fa4c8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      },
      // Add more static posts as needed
    ];

    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    const newPosts = recommendationData.slice(startIndex, endIndex);

    if (newPosts.length > 0) {
      // Append new posts to the existing list
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
    } else {
      // No more posts available
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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // keydown search all regions

    // Filter the recommendations based on the search term
    const filteredRecommendations = recommendationData.filter((item) =>
      item.region.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(filteredRecommendations);
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
    <div>
      <div className="py-2 px-2">
        <div>
          <header className="container-fluid">
            <div
              className={`row d-flex align-items-center ${styles.headerhero}`}
            >
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
              <Link
                href="/infinitescroll"
                className={`col-xl-6 col-lg-6 col-md-6 col-sm-6  ${styles.inputgroup}`}
              >
                <Form>
                  <FormControl
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    // onKeyDown={handleSearchKeyDown}
                    aria-describedby="button-addon5"
                    className={`form-control ${styles.searchvally}`}
                    list="itemList"
                  />
                  <datalist id="itemList">
                    {itemData.map((item) => (
                      <option key={item.id} value={item.title} />
                    ))}
                  </datalist>
                  <FontAwesomeIcon
                    className={styles.inputgroupicon}
                    icon={faSearch}
                  />
                </Form>
              </Link>
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
      </div>
      <div className="container px-5 pt-3 pb-5">
        <div className="row d-flex w-100">
          <h1 className="dark bold text-center">New York</h1>
          <p className="text-center mb-3 fw-500 pb-3 px-lg-5">
            Discover the world's top destinations and plan your next adventure
            with ease using <br /> Onroot's curated posts and itineraries
          </p>
          <InfiniteScroll
            className="w-100 overflow-hidden"
            dataLength={searchResults.length || posts.length}
            next={recommendationData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <Box sx={{ minHeight: 829 }}>
              {filteredPosts ? (
                <Masonry columns={3} spacing={2}>
                  {(filteredPosts.length > 0
                    ? filteredPosts
                    : searchResults.length > 0
                    ? searchResults
                    : posts
                  ).map((item, index) => (
                    <div key={index}>
                      <label className="fw-600">{item.region}</label>
                      <Link href="/infopage">
                        <img
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
                          }}
                        />
                      </Link>
                    </div>
                  ))}
                </Masonry>
              ) : filtereDescriptor ? (
                <Masonry columns={3} spacing={2}>
                  {(filtereDescriptor.length > 0
                    ? filtereDescriptor
                    : searchResults.length > 0
                    ? searchResults
                    : posts
                  ).map((item, index) => (
                    <div key={index}>
                      <label className="fw-600">{item.descriptor}</label>

                      <Link href="/infopage">
                        <img
                          src={`${
                            itemData[index % itemData.length].img
                          }?w=162&auto=format`}
                          srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                          alt={item}
                          loading="lazy"
                          style={{
                            display: "block",
                            width: "100%",
                            borderRadius: "15px",
                          }}
                        />
                      </Link>
                    </div>
                  ))}
                </Masonry>
              ) : (
                <Masonry columns={3} spacing={2}>
                  {(searchResults.length > 0 ? searchResults : posts).map(
                    (item, index) => (
                      <div key={index}>
                        <label className="fw-600">{item.region}</label>
                        <Link href="/infopage">
                          <img
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
                            }}
                          />
                        </Link>
                      </div>
                    )
                  )}
                </Masonry>
              )}
            </Box>
          </InfiniteScroll>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfiniteScrollComponent);
