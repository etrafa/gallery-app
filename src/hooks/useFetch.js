import { useState, useEffect } from "react";

export const useFetch = (url, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [queryTracker, setQueryTracker] = useState("");

  useEffect(() => {
    //clean the data array every time user make new search.

    setQueryTracker(query);
    if (queryTracker !== query) {
      setData([]);
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        const result = data.results;
        setLoading(false);
        setData((prev) => [...prev, ...result]);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError("Could not fetch the data.");
      }
    };

    fetchData();
  }, [url]);

  return { data, setData, loading, error };
};
