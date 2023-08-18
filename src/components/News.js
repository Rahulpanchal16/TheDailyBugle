import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title=`${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} | The Daily Bugle`
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad3bedf8309849cb9114c194d29e05ea&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=ad3bedf8309849cb9114c194d29e05ea&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNexClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=ad3bedf8309849cb9114c194d29e05ea&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container mt-3 text-center">
        <h2 className="text-center">The Daily Bugle - Top Headlines</h2>
        <div className="row text-center">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  loading={this.state.loading}
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
        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNexClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
