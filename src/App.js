import React, { useEffect, useState } from "react";
import icon from "./img/icon.png";

import "./App.css";
import Artist from "./components/artist";
import EventsArtist from "./components/event";

function App() {
  const app_id = "f56hj78";
  const request = `rest.bandsintown.com/artists/james?app_id=${app_id}`;

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="wrap">
        <form className="form">
          <input
            type="text"
            placeholder="Search artist"
            className="search_bar"
          />
          <button className="button">
            <img src={icon} className="image" alt={"icon"} />
          </button>
        </form>
      </div>
      <Artist />
      <EventsArtist />{" "}
    </div>
  );
}

export default App;
