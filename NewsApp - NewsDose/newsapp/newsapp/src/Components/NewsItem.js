import React from 'react';



const NewsItem = (props) => {
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={props.imageUrl?props.imageUrl:"https://cdn.pixabay.com/photo/2022/11/04/09/29/breaking-news-7569437__340.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <span className="badge bg-secondary my-2">Source: {props.source}</span>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">By {props.author?props.author:"Unknown"} on {props.date?new Date(props.date).toGMTString():"Unknown"}</small></p>
            <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem;
