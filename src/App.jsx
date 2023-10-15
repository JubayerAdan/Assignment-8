import React, { useEffect, useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Course from "./Components/Course/Course";
// import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
  const [fdata, setFData] = useState([
    {
      id: "-NKCQKDNUII90IY7",
      title: "Introduction to React",
      thumbnail:
        "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1461&q=80",
      author: "John Doe",
      authorImg: "https://images2.alphacoders.com/132/1323416.jpeg",
      readTime: "10 mins",
      publishDate: "2023-09-14",
    },
    {
      id: "-H4G69RJHDPN3IZ3",
      title: "JavaScript Fundamentals",
      thumbnail:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      author: "Jane Smith",
      authorImg: "https://pbs.twimg.com/media/E10sIcaWYAQieDI.jpg",
      readTime: "15 mins",
      publishDate: "2023-09-15",
    },
    {
      id: "-09BL017EBV6JXA6",
      title: "Getting Started with Node.js",
      thumbnail:
        "https://images.unsplash.com/photo-1660054591552-3c888d8e5319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
      author: "Alice Johnson",
      authorImg:
        "https://wallpapers.com/images/hd/death-note-4k-r75689fdex44fs6s.jpg",
      readTime: "12 mins",
      publishDate: "2023-09-16",
    },
    {
      id: "-ZLRRQUJEJ4DDORT",
      title: "HTML and CSS Basics",
      thumbnail:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      author: "Bob Williams",
      authorImg: "https://images.alphacoders.com/127/1273999.jpg",
      readTime: "8 mins",
      publishDate: "2023-09-17",
    },
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://knoledge-cafe.free.beeceptor.com/data");
  //       const data = await res.json();
  //       setFData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  //   useEffect(() => {
  //     fetch('fakedata.json')
  //         .then(res => res.json())
  //         .then(data => console.log(data))
  // }, []);
  const [bookmarkedTitles, setBookmarkedTitles] = useState([]);

  const handleBookmarkClick = (title) => {
    setBookmarkedTitles((prevTitles) => [...prevTitles, title]);
  };

  return (
    <div>
      <Header />
      <Course></Course>
    </div>
  );
}

export default App;
