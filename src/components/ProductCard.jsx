import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, desc, links }) => {

  console.log(links);
  return (
    <div
      className="card bg-dark shadow-lg p-1 mx-1 my-1"
      style={{ width: "20rem" }}
    >
      <img
        src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <div className="card-body">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-title p-1">{desc.substring(0, 80)}...</div>

        <Link
          to={`./${links}`}
          // to={links}
          className="btn btn-outline-danger card-text text-light rounded-0"
        >
          Explore <KeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
