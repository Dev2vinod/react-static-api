import "./news.css";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

function Take() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const getNews = async (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: query,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "3648d3b022msh86a3c45d99e78f5p1f4805jsn31b253ff7796",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.value);
      setData(response.data.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={getNews} className="form">
        <input
          type="text"
          placeholder="Enter a query"
          id=""
          className="input"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        {/* <p>{response.data.value}</p> */}
        <button type="sumbit">Get News </button>
      </form>

      <div>
        {data.map((eachPost) => (
          <div key={eachPost.name} className="post">
            <h1>{eachPost.name}</h1>
            <span>
              {moment(eachPost.datePublished).format("Do MM YYYY , h:mm a")}
            </span>
            <h3>{eachPost.description} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Take;
