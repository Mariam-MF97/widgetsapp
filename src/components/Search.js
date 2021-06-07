import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchTerm = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        searchTerm();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Read
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div style={{ margin: "50px" }}>
      <div className="ui form">
        <div className="ui field">
          <label>Search:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </div>
      {term === "" ? "" : <div className="ui celled list">{renderResults}</div>}
    </div>
  );
};

export default Search;
