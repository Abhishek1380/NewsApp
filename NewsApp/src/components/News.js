import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'




export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    articles = [];
    constructor(props) {
        super(props);
        console.log("Hello I'm a constuctor from news component");
        this.state = {
            articles: this.articles,
            loading: false, // useful when we are loading items it will be true(spin) 
            page: 3,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews(pageNo) {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ loading: true })
        this.setState({ articles: parsedData.articles });


        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4b10eec291e4ee1abfc1b2b7961231e&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ loading: true })
        this.setState({ articles: parsedData.articles });


        this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(parsedData.articles)
        })


    };

    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {


        // } else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4b10eec291e4ee1abfc1b2b7961231e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     console.log(parsedData);
        //     this.setState({ loading: true })
        //     this.setState({ articles: parsedData.articles });


        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles
        //     })

        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4b10eec291e4ee1abfc1b2b7961231e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles });


        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles
        // })
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }

    //  Content in componentDidMount is executed after render function
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4b10eec291e4ee1abfc1b2b7961231e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults });
    }


    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center my-3">NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {/* {<Spinner />} */}

                <div className="container">

                </div>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4">
                                    <NewsItem key={element.url} title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 150) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* Previous and next button */}
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} class="btn btn-dark" onClick={this.handleNextClick}>Next 	&rarr;</button>
                </div> */}

            </div >
        )
    }
}


export default News
