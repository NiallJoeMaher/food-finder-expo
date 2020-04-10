import React, { useEffect, useState } from "react";
import yelp from "../services/yelp";

export default () => {
  const [READY, ERROR, LOADING] = ["READY", "ERROR", "LOADING"];
  const [results, setResults] = useState([]);
  const [applicationState, setApplicationState] = useState(READY);

  const searchApi = searchTerm => {
    setApplicationState(LOADING);
    yelp(`/search?term=${searchTerm}&limit=50&location=dublin`)
      .then(json => {
        setApplicationState(READY);
        setResults(json.businesses);
      })
      .catch(() => {
        setResults([]);
        setApplicationState(ERROR);
      });
  };

  return [
    searchApi,
    results,
    applicationState
  ];
};
