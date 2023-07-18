import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchRecommendations } from "../../store/actions/recommendationActions";

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
      <div></div>
      <div className="container-fluid px-5 pt-3 pb-5">
        <div className="row d-flex w-100">
          <h1 className="dark bold text-center fw-600">New York</h1>
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
                    : recommendationData
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
                        <div style={{ position: "absolute", zIndex: 9999 }}>
                          <h3 className="w-700 text-white"> {item.region}</h3>
                        </div>
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
                    : recommendationData
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
                        <div style={{ position: "absolute", zIndex: 9999 }}>
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
                <Masonry columns={3} spacing={2}>
                  {(searchResults.length > 0 ? searchResults : posts).map(
                    (item, index) => (
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
                          <div style={{ position: "absolute", zIndex: 9999 }}>
                            <h3 className="w-700 text-white"> {item.region}</h3>
                          </div>
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
