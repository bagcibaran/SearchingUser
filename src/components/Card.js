import React from "react";

const Card = (data) => {
  return (
    <div>
      <div className="card">
        <div key={data.index} class="col-md-12">
          <div className="name">{data.item.name}</div>
          <div class="row">
            <div class="col-md-3">
              <a href="tel: {item.phone}">
                <i class="fa-solid fa-phone"></i>
                {data.item.phone}
              </a>
            </div>
            <div class="col-md-3">
              <a href="mailto: {item.email}">
                <i class="fa-solid fa-at"></i>
                {data.item.email}
              </a>
            </div>
            <div class="col-md-6">
              <i class="fa-solid fa-file-lines"></i>
              Policy No. {data.item.policyNo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
