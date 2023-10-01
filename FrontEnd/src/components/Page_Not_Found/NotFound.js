import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-text">
        The page you're looking for doesn't exist.
      </p>
      <span className="not-found-emoji not-found-animation" role="img" aria-label="Sad Emoji">
        😔
      </span>
    </div>
  );
};

export default NotFound;
