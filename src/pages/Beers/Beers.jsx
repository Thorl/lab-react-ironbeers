import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Beers.css";

export const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((allBeers) => {
        setBeers(allBeers.data);
      })
      .catch((error) => {
        console.log("An error occured while getting all beers: ", error);
      });
  }, []);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
      .then((response) => {
        setBeers(response.data);
      });
  }, [searchQuery]);

  return (
    <div className="beersContainer">
      <label htmlFor="">Search</label>
      <input type="text" value={searchQuery} onChange={handleSearchInput} />
      {!beers && <h2>Loading...</h2>}
      {beers.map((singleBeer) => {
        return (
          <Link
            to={`/beers/${singleBeer._id}`}
            key={singleBeer._id}
            className="beerCard"
          >
            <img src={singleBeer.image_url} alt="A beer" />
            <div className="beerCard__info">
              <h2>{singleBeer.name}</h2>
              <p>{singleBeer.tagline}</p>
              <small>
                <strong>Created by:</strong> {singleBeer.contributed_by}
              </small>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
