import React, { Component } from "react";
import "../App.css";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      url,
      loading,
      publishedAt,
      author,
      source,
    } = this.props;

    return (
      <div>
        <div className="card my-3 ">
          <span
            class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source == null ? "unknown" : source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              loading
                ? "https://image-placeholder.com/images/actual-size/320x200.png"
                : imageUrl
            }
            className="card-img-top"
            alt="news"
          />
          <div className="card-body ">
            <h5
              className={`cust-link card-title ${
                loading ? "placeholder-glow" : ""
              }`}
            >
              {loading ? (
                <span
                  className={`${loading ? "placeholder col-6" : ""}`}
                ></span>
              ) : (
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={url}
                >
                  <span>{title}...</span>
                </a>
              )}
            </h5>
            <p className={`card-text ${loading ? "placeholder-glow" : ""}`}>
              {" "}
              {loading ? (
                <>
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </>
              ) : (
                <span>{description}...</span>
              )}{" "}
            </p>

            <p
              className={`card-text text-start ${
                loading ? "placeholder-glow" : ""
              }`}
            >
              {loading ? (
                <span className="placeholder col-7"></span>
              ) : (
                <small id="publishedAt" className="text-body-secondary">
                  By {author} on {publishedAt}
                </small>
              )}
            </p>

            <a
              href={url}
              className={`btn btn-sm btn-dark  ${
                loading ? "disabled placeholder col-3" : ""
              }`}
            >
              {loading ? "" : "Read More"}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
