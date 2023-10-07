import { Rating } from "@mui/material";
import React from "react";

const ReviewCard = ({ rating, desc }) => {
  return (
    <div className="card bg-dark p-3 shadow-lg m-1">
      <p>
        <Rating value={rating} readOnly precision={0.1} />
      </p>
      <p className="fst-italic">{desc}</p>
    </div>
  );
};

export default ReviewCard;
