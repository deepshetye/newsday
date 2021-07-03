import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './header/Header';
import NewsContent from './newsContent/NewsContent';

const App = () => {

    const [category, setCategory] = useState("General");
    const [newsArray, setNewsArray] = useState([]);
    const [newsResults, setNewsResults] = useState();
    const [loadMore, setLoadMore] = useState(20);

    const newsApi = async () => {
        try {
            const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=411e08321f0a441fbb35c22038dd4b4e&category=${category}&pageSize=${loadMore}`);
            setNewsArray(news.data.articles);
            setNewsResults(news.data.totalResults);
        } catch (error) {
            console.log("Error");
        }
    }

    useEffect(() => {
        newsApi();
        // eslint-disable-next-line
    }, [newsResults, category, loadMore]);

    return (
        <div className="main_newsbody">
            <Header setCategory={setCategory} />
            <NewsContent setLoadMore={setLoadMore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults} />
        </div>
    )
}

export default App;