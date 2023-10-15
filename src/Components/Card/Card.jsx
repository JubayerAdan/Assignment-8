import React, { useState } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {msr} from '../Sidebar/Sidebar'
import "./Card.css";
const Card = (props) => {
  const [isRead, setIsRead] = useState(false);

  const handleMarkAsRead = () => {
    props.updateReadTime(props.readTime);
  };

  // Function to handle the bookmark button click
  const handleBookmarkClick = () => {
    props.addBookmarkTitle(props.title);
  };

  return (
    <div>
      <div className="card mb-3">
        <img src={props.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="m-2 d-flex justify-content-between">
            <div className="d-flex">
              <img
                className="author-img rounded-circle"
                src={props.authorimg}
                alt=""
              />
              <div>
                <h5 className="ms-2 mb-0 mt-2">{props.author}</h5>
                <p className="mb-0 ms-2">{props.publish}</p>
              </div>
            </div>
            <div className="d-flex">
              <small className="readTime">{props.readTime}min read</small>
              <button onClick={handleBookmarkClick}>
                <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>

          <button className="mr-btn" onClick={handleMarkAsRead}>
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
