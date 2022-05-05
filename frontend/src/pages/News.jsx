import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
import NewsGenerator from "../components/NewsGenerator";

function News() {
  const [news, SetNews] = useState([]);
  const [otherNews, SetOtherNews] = useState("Google");
  const [value, SetValue] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: otherNews, lang: "fr", page_size: 1 },
      headers: {
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
        "X-RapidAPI-Key": "714ea07319mshb57e35c6120bc17p10af03jsn1971bc154b72",
      },
    };

    axios.request(options).then((response) => {
      SetNews(response.data.articles);
    });
  }, [otherNews]);

  function handleClick(e) {
    e.preventDefault();
    SetOtherNews(value);
  }

  function handleChange(e) {
    SetValue(e.target.value);
  }

  return (
    <div>
      {news.map((e) => (
        <NewsGenerator
          title={e.title}
          author={e.author}
          date={e.published_date}
          summary={e.summary}
          links={e.link}
        />
      ))}
      <form onSubmit={handleClick}>
        <label htmlFor="newsSearch">
          Search :
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Yes" />
      </form>
    </div>
  );
}
export default News;
