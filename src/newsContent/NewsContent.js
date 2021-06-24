import React from 'react';
import './newsContent.css';
import NewsCard from './NewsCard';

const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore}) => {
    return (
        <div className="main_newscontent">
            {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
            ))}
            {
                loadMore <= newsResults && (
                    <>
                        <hr />
                        <button className="loadMore" onClick={()=>setLoadMore(loadMore+20)} style={{color:'#060b26'}}>Load More</button>
                    </>
                )
            }
        </div>
    )
}

export default NewsContent
