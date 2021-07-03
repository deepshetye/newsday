import React from 'react';

const NewsCard = ({newsItem}) => {

    const fullDate = new Date(newsItem.publishedAt);
    var date = fullDate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2));
    const time = hour > 12 ? true : false;

    return (
        <div className="news_card">
            <img alt={newsItem.title} src={newsItem.urlToImage?newsItem.urlToImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2F4vector.com%2Ffree-vector%2Fvector-white-blank-button-app-icon-template-133579&psig=AOvVaw2javP8HfaC1zal2w3DIY6U&ust=1619603057499000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjK5t6RnvACFQAAAAAdAAAAABAE"} className="news_image" />
            <div className="news_text">
                <div>
                    <span className="news_text_title">{newsItem.title}</span>
                    <span className="news_text_author muted"><br/>
                        by {newsItem.author?newsItem.author:"Unknown"}{" "}||{" "}
                        { time?`${hour-12}:${date[4].substring(3,5)} pm`:`${hour}:${date[4].substring(3,5)} am` }
                        {" "}on {date[2]} {date[1]} {date[3]}, {date[0]}
                    </span>
                </div>
                <div className="lower_news_text">
                    <div className="news_text_description">{newsItem.description}</div>
                    <span className="news_text_readmore">
                        Read more at
                        <a className="source" href={newsItem.url} target="__blank"><b>{newsItem.source.name}</b></a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;