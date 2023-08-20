import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // document.title = `${capitalizeFirstLetter(
  //   props.category
  // )} | The Daily Bugle`;

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const topOfPage = () => {
    window.scrollTo(0, 0);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);

    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h2 className="text-center mt-3">
        The Daily Bugle - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading ? <Spinner /> : ""}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={loading ? "" : "That is all for now, Have a great day"}
        className="text-center"
      >
        <div className="container">
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    loading={loading}
                    title={
                      element.title !== null ? element.title.slice(0, 50) : ""
                    }
                    description={
                      element.description !== null
                        ? element.description.slice(0, 70)
                        : "Read more about this article by pressing the button below"
                    }
                    imageUrl={
                      element.urlToImage !== null
                        ? element.urlToImage
                        : "https://image-placeholder.com/images/actual-size/320x200.png"
                    }
                    url={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {loading ? (
        ""
      ) : (
        <button
          onClick={topOfPage}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
          }}
          id="back-to-top"
          className="btn btn-light btn-lg  back-to-top"
        >
          <i class="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
};

export default News;
