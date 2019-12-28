import React from "react";
import "./artist.css";

import profile from "../img/profile.png";

function EventsArtist() {
  return (
    <div className="artists">
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
      </div>
      <div className="text">
        <p className="result_text">7 upcoming events</p>
      </div>
      <div className="main">
        <div className="event_card">
          <p>Event Details</p>
          <hr />
          <div className="event_container">
            <div className="details1">
              <p>
                <b>Country</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Pakistan</p>
              <p>
                <b>City</b>
              </p>
              <p>Lahore</p>
            </div>
            <div className="details2">
              <p className="venue">
                <b>Venue</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Avari Hotel</p>
              <p className="date">
                <b>Date</b>
              </p>
              <p>1st Jan, 2020</p>
            </div>
          </div>
        </div>
        <div className="event_card">
          <p>Event Details</p>
          <hr />
          <div className="event_container">
            <div className="details1">
              <p>
                <b>Country</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Pakistan</p>
              <p>
                <b>City</b>
              </p>
              <p>Lahore</p>
            </div>
            <div className="details2">
              <p>
                <b>Venue</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Avari Hotel</p>
              <p>
                <b>Date</b>
              </p>
              <p>1st Jan, 2020</p>
            </div>
          </div>
        </div>
        <div className="event_card">
          <p>Event Details</p>
          <hr />
          <div className="event_container">
            <div className="details1">
              <p>
                <b>Country</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Pakistan</p>
              <p>
                <b>City</b>
              </p>
              <p>Lahore</p>
            </div>
            <div className="details2">
              <p>
                <b>Venue</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Avari Hotel</p>
              <p>
                <b>Date</b>
              </p>
              <p>1st Jan, 2020</p>
            </div>
          </div>
        </div>
        <div className="event_card">
          <p>Event Details</p>
          <hr />
          <div className="event_container">
            <div className="details1">
              <p>
                <b>Country</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Pakistan</p>
              <p>
                <b>City</b>
              </p>
              <p>Lahore</p>
            </div>
            <div className="details2">
              <p>
                <b>Venue</b>
              </p>
              <p style={{ marginBottom: "40px" }}>Avari Hotel</p>
              <p>
                <b>Date</b>
              </p>
              <p>1st Jan, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsArtist;
