import React from "react";

const SearchResult = ({ data }) => {
  if (data.length === 0) {
    return <div className="not-found">No Result Found</div>;
  }
  return (
    <>
      {data.map((item, index) => (
        <div className="result-item" key={index}>
          <h1 className="name">{item.name}</h1>

          <div className="user-info">
            <div className="info-section phone">
              <a href={`tel:${item.phone}`}>
                <i class="fa-solid fa-phone"></i> {item.phone}
              </a>
            </div>
            <div className="info-section mail">
              <a href={`mailto:${item.email}`}>
                <i class="fa-solid fa-at"></i> {item.email}
              </a>
            </div>

            <div className="info-section policy">
              <i class="fa-solid fa-file-lines"></i> Policy No. {item.policyNo}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default SearchResult;
