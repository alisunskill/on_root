import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
import styles from "../../styles/viewsave.module.css";

const InfiniteScrollComponent = () => {
  const router = useRouter();
  const region = router.query.region?.toLowerCase();
  const { min, max } = router.query;
  console.log(region, "region");
  const minCost = parseInt(min) || 0;
  const maxCost = parseInt(max) || Number.MAX_VALUE;
  console.log(minCost, maxCost, "minCost and maxCost");
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

  const handleLinkClick = (itemId, postTitle) => {
    router.push(
      `/eventdetail/${encodeURIComponent(
        postTitle.replace(/ /g, "-")
      )}?id=${itemId}`
    );
  };

  const fetchPosts = () => {
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    const newPosts = recommendationData.slice(startIndex, endIndex);

    if (newPosts.length > 0) {
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

  // min and max base cost ueEffect
  useEffect(() => {
    const fetchPosts = async () => {
      // Fetch the posts based on the min and max cost values
      // Replace this with your API call to fetch the recommendations
      const response = await fetch(
        `recommendations?min=${minCost}&max=${maxCost}`
      );
      const data = await response.json();

      const newPosts = data.Recommendations;

      if (newPosts.length > 0) {
        // Append new posts to the existing list
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
      } else {
        // No more posts available
        setHasMore(false);
      }
    };

    fetchPosts();
  }, [minCost, maxCost]);

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

  const filtereDescriptor = recommendationData.filter((post) => {
    if (typeof post.descriptor === "string") {
      return post.descriptor.toLowerCase() === descriptor;
    }
    return false;
  });

  // filterPrice
  const filterPrice = recommendationData.filter(
    (post) => post.cost >= minCost && post.cost <= maxCost
  );

  useEffect(() => {
    setPosts(filtereDescriptor);
    setHasMore(false);
  }, [router.query.descriptor]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Fetch the posts based on the min and max cost values
      const response = await fetch(
        `recommendations?min=${minCost}&max=${maxCost}`
      );
      const data = await response.json();

      const newPosts = data.Recommendations || [];

      if (newPosts.length > 0) {
        // Append new posts to the existing list
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
      } else {
        // No more posts available
        setHasMore(false);
      }
    };

    fetchPosts();
  }, [minCost, maxCost]);

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
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div></div>
      <div className="container-fluid px-5 pt-3 pb-5">
        <div className="row d-flex w-100">
          <h1 className="dark bold text-center fw-600">
            {filteredPosts.length > 0 && filteredPosts[0].region}
          </h1>
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
                    : filterPrice.length > 0
                    ? filterPrice
                    : recommendationData
                  ).map((item, index) => (
                    <div key={index} className="">
                      {console.log(item, "item")}

                      <div
                        className={`text-decoration-none d-flex justify-content-center flex-column ${styles.savelink}`}
                        onClick={() => handleLinkClick(item._id, item.title)}
                      >
                        <img
                          className={styles.uploadimg}
                          src={item.images[0]}
                          alt="Uploaded Image"
                        />

                        <div style={{ position: "absolute ", zIndex: 999 }}>
                          <div className="text-center">
                            <p className={`mb-0 letterspac text-white`}>
                              Event
                            </p>
                            <h3 className="w-700 text-white"> {item.title}</h3>
                            <p className={`mb-0 m1 text-white`}>
                              {" "}
                              {item.region}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              ) : filtereDescriptor ? (
                <Masonry columns={3} spacing={2}>
                  {(filtereDescriptor.length > 0
                    ? filtereDescriptor
                    : searchResults.length > 0
                    ? searchResults
                    : filterPrice.length > 0
                    ? filterPrice
                    : recommendationData
                  ).map((item, index) => (
                    <div key={index}>
                      {console.log(item, "des")}

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
                          className={styles.uploadimg}
                          src={item.images[0]}
                          alt="Uploaded Image"
                        />
                        <div style={{ position: "absolute", zIndex: 9999 }}>
                          <h3 className="w-700 text-white">
                            {item.descriptor}
                          </h3>
                        </div>
                      </Link>
                    </div>
                  ))}
                </Masonry>
              ) : filterPrice ? (
                <Masonry columns={3} spacing={2}>
                  {filterPrice.map((item, index) => (
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
                          className={styles.uploadimg}
                          src={item.images[0]}
                          alt="Uploaded Image"
                        />
                        <div style={{ position: "absolute", zIndex: 9999 }}>
                          <h3 className="w-700 text-white"> {item.region}</h3>
                        </div>
                      </Link>
                    </div>
                  ))}
                </Masonry>
              ) : (
                ""
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
