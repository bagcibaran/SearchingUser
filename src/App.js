import React, { useState, useEffect } from "react";
import "./style/style.css";
import data from "./data";

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
      <div className="container-fluid">
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

        <div className="list">
          <div class="row">
            {filterData.map((item, index) => (
              <div className="card">
                <div key={index} class="col-md-12">
                  <div className="name">{item.name}</div>
                  <div class="row">
                    <div class="col-md-3">
                      <a href="tel: {item.phone}">
                        <i class="fa-solid fa-phone"></i>
                        {item.phone}
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="mailto: {item.email}">
                        <i class="fa-solid fa-at"></i>
                        {item.email}
                      </a>
                    </div>
                    <div class="col-md-6">
                      <i class="fa-solid fa-file-lines"></i>
                      Policy No. {item.policyNo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
