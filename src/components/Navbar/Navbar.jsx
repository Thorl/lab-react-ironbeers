import { Link } from "react-router-dom";
import navbar from "../../assets/header.png";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <Link to="/">
      <nav className="navbar">
        <img src={navbar} alt="navbar" />
      </nav>
    </Link>
  );
};
