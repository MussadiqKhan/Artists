import React from "react";
import "./artist.css";
import profile from "../img/profile.png";

function Artist() {
  return (
    <div className="artists">
      <p>4 results found for 'Bilal'</p>
      <div className="main">
        <div className="card">
          <img src={profile} alt={"profile"} />
          <div className="container">
            <p>
              <b>John Doe</b>
            </p>
            <p>facebook.com/bilal</p>
          </div>
        </div>
        <div className="card">
          <img src={profile} alt={"profile"} />
          <div className="container">
            <p>
              <b>John Doe</b>
            </p>
            <p>facebook.com/bilal</p>
          </div>
        </div>
        <div className="card">
          <img src={profile} alt={"profile"} />
          <div className="container">
            <p>
              <b>John Doe</b>
            </p>
            <p>facebook.com/bilal</p>
          </div>
        </div>
        <div className="card">
          <img src={profile} alt={"profile"} />
          <div className="container">
            <p>
              <b>John Doe</b>
            </p>
            <p>facebook.com/bilal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
