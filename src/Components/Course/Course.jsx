import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Course.css";
const Course = () => {
  const [fdata, setFData] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmarkedTitles, setBookmarkedTitles] = useState([]); // New state for bookmarked titles

  const updateReadTime = (time) => {
    setReadTime((prevReadTime) => prevReadTime + time);
  };

  // Function to add a title to the list of bookmarked titles
  const addBookmarkTitle = (title) => {
    setBookmarkedTitles((prevTitles) => [...prevTitles, title]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("products.json");
        const data = await res.json();
        setFData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="readtime rounded">
        <h4 className="text-center  me-5">
          Spent time on read : {readTime} min
        </h4>
      </div>
      <div className="d-flex pe-3 justify-content-between">
        <div className="ms-5">
          {fdata ? (
            fdata.map((card) => (
              <Card
                author={card.author}
                publish={card.publishDate}
                authorimg={card.authorImg}
                title={card.title}
                thumbnail={card.thumbnail}
                description={card.description}
                key={card.id}
                readTime={card.readTime}
                data={card}
                updateReadTime={updateReadTime}
                addBookmarkTitle={addBookmarkTitle} // Pass the function
              />
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <div className="bg-light p-3 rounded ms-5 bt-container w-25">
          <div>
            <div>
              <h3
                style={{ whiteSpace: "nowrap", fontWeight: "semi-bold" }}
                className="d-inline"
              >
                Bookmarked Blogs : {bookmarkedTitles.length}
              </h3>
              {bookmarkedTitles.map((title, index) => (
                <div key={index} className="bg-white rounded mb-2 mt-2 p-3">
                  <strong className="font-bold">{title}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
