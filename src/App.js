import React, { useState, useEffect } from "react";
import "./style/style.css";
import data from "./data";
import SearchResult from "./components/SearchResult";

function App() {
  const [filterData, setFilterData] = useState(data);
  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    const newData = data.filter((item) =>
      searchKey.toLowerCase() === ""
        ? item
        : JSON.stringify(item).toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilterData(newData);
  }, [searchKey]);

  return (
    <div className="App">
      <div className="search-container container-fluid ">
        <div className="input-container">
          <span className="search-icon">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="SEARCH (Client Name / Gender Number)"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>

        {searchKey.length ? (
          <div className="search-result-container">
            <SearchResult data={filterData} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
