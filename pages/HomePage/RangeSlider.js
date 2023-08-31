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

  const recData =
    recommendations && recommendations.Recommendations
      ? recommendations.Recommendations
      : [];

  const [value, setValue] = useState([0, 1000]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1550);

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch]);

  useEffect(() => {
    if (recommendations && recommendations.Recommendations.length > 0) {
      const minCost = Math.min(
        ...recommendations.Recommendations.map((post) => post.cost)
      );
      const maxCost = Math.max(
        ...recommendations.Recommendations.map((post) => post.cost)
      );
      setMinValue(minCost);
      setMaxValue(maxCost);
      if (value[0] < minCost || value[1] > maxCost) {
        setValue([minCost, maxCost]);
      }
    }
  }, [value, recommendations]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleApply = () => {
    const filtered = itemData.filter(
      (item) => item.cost >= value[0] && item.cost <= value[1]
    );

    // setFilteredRecommendations(filtered);

    const url = `/infinitescroll?min=${value[0]}&max=${value[1]}`;
    window.location.href = url;
  };

  return (
    <div className="d-flex justify-content-center">
      <Box sx={{ width: 275 }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={minValue}
          max={1000}
        />
        <div>
          Min: ${value[0]} &#160; &#160; Max: ${value[1]}
        </div>

        <button
          type="button"
          className="btn btn-primary mt-2 w-100"
          onClick={handleApply}
        >
          Apply
        </button>
      </Box>
    </div>
  );
}
