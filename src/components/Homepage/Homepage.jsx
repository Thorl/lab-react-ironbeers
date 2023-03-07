import { Link } from "react-router-dom";

import beersImg from "../../assets/beers.png";
import randomBeerImg from "../../assets/random-beer.png";
import newBeerImg from "../../assets/new-beer.png";

import "./Homepage.css";

export const Homepage = () => {
  return (
    <section className="homepageNav">
      <Link to="/beers" className="homepageNav__navItem">
        <img src={beersImg} alt="" />
        <h3>All Beers</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          obcaecati eaque dolorum totam aliquid quae? Similique ipsam quod
          necessitatibus perferendis!
        </p>
      </Link>
      <Link to="/random-beer" className="homepageNav__navItem">
        <img src={randomBeerImg} alt="" />
        <h3>Random Beer</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ut
          laboriosam doloremque dolores illo. Animi perspiciatis consequatur
          alias reprehenderit molestias.
        </p>
      </Link>
      <Link to="/new-beer" className="homepageNav__navItem">
        <img src={newBeerImg} alt="" />
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          perspiciatis pariatur, fugiat optio excepturi consequuntur enim
          veritatis dolor consectetur illo.
        </p>
      </Link>
    </section>
  );
};
