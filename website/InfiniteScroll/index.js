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
import InfiniteScroll from "react-infinite-scroll-component";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Snacks",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    title: "Tower",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    title: "Tree",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    title: "Camping Car",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    title: "Tree",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    title: "Camping Car",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    title: "Tree",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    title: "Camping Car",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Mountain",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

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

  // scrolled
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
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
    const newPosts = itemData.slice(startIndex, endIndex);

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
    const scrollPageAfterDelay = () => {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 3000); // Adjust the delay time in milliseconds (e.g., 3000 = 3 seconds)
    };

    scrollPageAfterDelay();
  }, []);

  // scrolled end

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

    const filteredCards = posts.filter((card) =>
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
          {searchResults ? (
            <InfiniteScroll
              className="w-100 overflow-hidden"
              dataLength={posts.length}
              next={fetchPosts}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
            >
              <Box sx={{ minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                  {searchResults.map((item, index) => (
                    <div key={index}>
                      <label className="fw-600">{item.title}</label>
                      <Link href="/infopage">
                        <img
                          src={`${item.img}?w=162&auto=format`}
                          srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                          alt={item.title}
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
              </Box>
            </InfiniteScroll>
          ) : (
            <InfiniteScroll
              className="w-100 overflow-hidden"
              dataLength={posts.length}
              next={fetchPosts}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
            >
              <Box sx={{ minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                  {itemData.map((item, index) => (
                    <div key={index}>
                      <label className="fw-600">{item.title}</label>
                      <Link href="/infopage">
                        <img
                          src={`${item.img}?w=162&auto=format`}
                          srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                          alt={item.title}
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
              </Box>
            </InfiniteScroll>
          )}
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
