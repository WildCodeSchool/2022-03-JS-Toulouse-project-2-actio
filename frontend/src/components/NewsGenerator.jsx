import React from "react";
import "./NewsGenerator.css";

function NewsGenerator({ title, author, date, summary, links }) {
  return (
    <div className="news">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>Le &quot;{date}&quot;</p>
      <p>{summary}</p>
      <a href={links}>{links}</a>
    </div>
  );
}

export default NewsGenerator;
