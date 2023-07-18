import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { fetchRecommendations } from "../../store/actions/recommendationActions";
import { connect, useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "@mui/lab/Masonry";
import Link from "next/link";

function valuetext(value) {
  return `${value}°C`;
}
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
export default function RangeSlider() {
  const dispatch = useDispatch();
  const recommendationsData = useSelector((state) => state.recommendation);
  const { recommendations, loading, error } = recommendationsData;

  const [value, setValue] = useState([0, 550]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(550);
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  useEffect(() => {
    if (recommendations && recommendations.Recommendations.length > 0) {
      // Calculate the minimum and maximum values from the recommendations
      const minCost = Math.min(
        ...recommendations.Recommendations.map((post) => post.cost)
      );
      const maxCost = Math.max(
        ...recommendations.Recommendations.map((post) => post.cost)
      );

      // Update the state with the new minimum and maximum values
      setMinValue(minCost);
      setMaxValue(maxCost);

      // Adjust the current value if it exceeds the new range
      if (value[0] < minCost || value[1] > maxCost) {
        setValue([minCost, maxCost]);
      }

      // Filter the recommendations based on the selected price range
      const filtered = recommendations.Recommendations.filter(
        (post) => post.cost >= value[0] && post.cost <= value[1]
      );
      setFilteredRecommendations(filtered);
    }
  }, [value, recommendations]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(filteredRecommendations, "recommendations");

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={minValue}
        max={maxValue}
      />

      {filteredRecommendations && (
        <InfiniteScroll
          className="w-100 overflow-hidden"
          dataLength={filteredRecommendations.length}
          next={filteredRecommendations}
          // hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Box sx={{ minHeight: 829 }}>
            {
              <Masonry columns={3} spacing={2}>
                {filteredRecommendations.map((item, index) => (
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
            }
          </Box>
        </InfiniteScroll>
      )}
    </Box>
  );
}
