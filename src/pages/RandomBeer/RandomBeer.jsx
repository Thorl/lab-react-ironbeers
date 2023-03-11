import axios from "axios";

import { useEffect, useState } from "react";

import "./RandomBeer.css";

export const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((beerResponse) => {
        console.log("Beer details: ", beerResponse.data);
        setBeer(beerResponse.data);
      });
  }, []);

  return (
    <>
      {!beer && <h2>Loading...</h2>}
      {beer && (
        <div className="randomBeer">
          <img src={beer.image_url} alt="" />
          <div className="randomBeer__firstLine">
            <h2>{beer.name}</h2>
            <p className="randomBeer__attenuationLevel">
              {beer.attenuation_level}
            </p>
          </div>
          <div className="randomBeer__secondLine">
            <small className="randomBeer__tagline">{beer.tagline}</small>
            <p>
              <strong> {beer.first_brewed}</strong>
            </p>
          </div>

          <p>{beer.description}</p>
          <small className="randomBeer__contributedBy">
            {beer.contributed_by}
          </small>
        </div>
      )}
    </>
  );
};
