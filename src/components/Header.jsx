import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PastTimeEntertainment
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="explore">
                Explore
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="events">
                Events
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="what-we-do">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="conflict-management">
                <Badge badgeContent={"new"} color="success">Training</Badge>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
