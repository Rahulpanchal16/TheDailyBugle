import React from "react";
import "../App.css";
// import Spinner from "./Spinner";

const NewsItem = (props) => {
  let { title, description, imageUrl, url, publishedAt, author, source } =
    props;

  return (
    <div className="container">
      <div className="card my-3 ">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className=" badge  bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source == null ? "unknown" : source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="news"
          style={{ height: "250px", width: "100%", objectFit: "cover" }}
        />
        <div className="card-body ">
          <h5 className={`cust-link card-title`}>
            <a style={{ textDecoration: "none", color: "black" }} href={url}>
              <span>{title}...</span>
            </a>
          </h5>
          <p className={`card-text `}>
            <span>{description}...</span>
          </p>

          <p className={`card-text text-start`}>
            <small id="publishedAt" className="text-body-secondary">
              By {author} on {publishedAt}
            </small>
          </p>

          <a href={url} className={`btn btn-sm btn-dark `}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
