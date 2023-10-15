import React, { useState } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ watchTime }) => {
  return (
    <div>
      <h2>Bookmarked Titles:</h2>
      <ul>
        <h3>{watchTime}</h3>
      </ul>
    </div>
  );
};

export default Sidebar;
