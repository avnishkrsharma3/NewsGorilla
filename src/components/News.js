import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            title: "",
            totalResults: 0,
        };
        document.title = this.capitalizeFirstLetter(`${props.category}`) + ' - Latest News'
        console.log(document.title);
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        cnt: PropTypes.number
    }
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=In&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({
            loading : true
        });
        console.log(url);
        this.props.setProgress(30);
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        this.props.setProgress(65);
            this.setState({
            articles : parseData.articles, // it is an array
            totalResults : parseData.totalResults,
            loading :  false});
            this.props.setProgress(100);
    }
    async componentDidMount() {
        console.log('call updateNews');
    this.updateNews();
    }
    fetchMoreData = async() => {
        console.log("fetch Data");
        this.state.page = this.state.page + 1;       
        //console.log(this.state.page);
        const url = `https://newsapi.org/v2/top-headlines?country=In&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        //console.log(url);
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parseData = await data.json();
        //console.log(url);
        this.setState({
            articles: this.state.articles.concat(parseData.articles), // it is an array
            loading: false,
            totalResults : parseData.totalResults,
        });
    };
    render() {
        //console.log("render");
        return (
            <>
                <h1 className="text-center" style={{ marginTop: "90px", marginBottom: "15px" }}> {this.capitalizeFirstLetter(this.props.category) === "General" ? "News" : this.capitalizeFirstLetter(this.props.category)} - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData} 
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
            <div className="container">
                <div className="row">
                    {this.state.articles.map((elem) => {
                        return (
                            <div key={elem.url} className="col-md-4">
                                <NewsItem
                                    title={(elem.title) ? elem.title.slice(0, 73) : ""}
                                    description={(elem.description) ? elem.description.slice(0, 88) : ""}
                                    imageUrl={elem.urlToImage}
                                    newsUrl={elem.url}
                                    author={elem.author}
                                    date={elem.publishedAt}
                                    source={elem.source.name}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
                </InfiniteScroll>
            </>
        );
    }
}
