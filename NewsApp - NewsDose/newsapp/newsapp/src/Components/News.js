import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'




const News = (props) =>{


  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalResults, setTotalResults] = useState(0);

  
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    let ans = lower.slice(0, 1).toUpperCase() + lower.slice(1);
    return ans;
  } 


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsDose`;
    updateNews();
  }, [])


  const handlePrevClick = async () => {
    setPage(page-1);
    updateNews();
  }

  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();    
  }
  
    return (
      <>
      <div className="container my-4">
        <h2 className="text-center" style={{marginTop: "90px"}}>NewsDose - Top {capitalize(props.category)} Headlines</h2>
        <div className="row my-4">
          {loading && <Spinner/>}
          
          {!loading && articles.map((element)=>{
            return <div className="col-md-4 my-4"  key={element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div> 
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={page+1>Math.ceil(totalResults/pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      </>
    )
  
}



News.defaultProps = {
  country: "in",
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string
}

export default News;