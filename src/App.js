import React, { useState, useEffect } from "react";
import "./style/style.css";
import data from "./data";
import Card from "./components/Card";
import NotFoundCard from "./components/NotFoundCard";

function App() {
  const [filterData, setFilterData] = useState(data);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const newData = data.filter((item) =>
      search.toLowerCase() === ""
        ? item
        : JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(newData);
  }, [search]);

  return (
    <div className="App">
      <div className="container">
        <div className="inputContainer">
          <button className="button" type="button">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            className="search"
            type="text"
            placeholder="SEARCH (Client Name / Gender Number)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {search.length ? (
          <div className="list">
            <div class="list-item">
              {filterData.length > 0 ? (
                filterData.map((item, index) => (
                  <Card item={item} index={index} />
                ))
              ) : (
                <NotFoundCard />
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
