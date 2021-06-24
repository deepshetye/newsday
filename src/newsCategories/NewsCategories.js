import React from 'react';
import './newsCategories.css';

const NewsCategories = ({setCategory}) => {
    return (
        <div className="news_category_container">
            <h3 className="news_category_header">
                Categories
            </h3>
            <div className="news_category_list">
                <button onClick={ () => setCategory("Business") } >Business</button>
                <button onClick={ () => setCategory("Entertainment") } >Entertainment</button>
                <button onClick={ () => setCategory("General") } >General</button>
                <button onClick={ () => setCategory("Health") } >Health</button>
                <button onClick={ () => setCategory("Science") } >Science</button>
                <button onClick={ () => setCategory("Sports") } >Sports</button>
                <button onClick={ () => setCategory("Technology") } >Technology</button>
            </div>
        </div>
    )
}

export default NewsCategories;