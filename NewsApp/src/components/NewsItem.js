import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (

            <div className="card ">
                <div className="position-absolute top-0 end-1 translate-middle badge rounded-pill bg-danger">
                    <span className="badge bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://static.latribune.fr/full_width/1941352/france-immatriculations-de-voitures-neuves-en-baisse-de-10-09-en-mai.jpg" : imageUrl} className="card-img-top" alt="fuck you" />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{description}....</p>
                    <p className="card-text"><small className="text-muted"> By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
