import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./BeerDetails.css";

export const BeerDetails = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((beerResponse) => {
        console.log("Beer details: ", beerResponse.data);
        setBeer(beerResponse.data);
      });
  }, [beerId]);

  return (
    <>
      {beer && (
        <div className="beerDetails">
          <img src={beer.image_url} alt="" />
          <div className="beerDetails__firstLine">
            <h2>{beer.name}</h2>
            <p className="beerDetails__attenuationLevel">
              {beer.attenuation_level}
            </p>
          </div>
          <div className="beerDetails__secondLine">
            <small className="beerDetails__tagline">{beer.tagline}</small>
            <p>
              <strong> {beer.first_brewed}</strong>
            </p>
          </div>

          <p>{beer.description}</p>
          <small className="beerDetails__contributedBy">
            {beer.contributed_by}
          </small>
        </div>
      )}
    </>
  );
};
