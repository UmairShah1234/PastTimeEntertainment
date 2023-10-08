import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div className="my-1">
      <h3 className="text-danger">
        <span className="border-bottom">{title}</span>
      </h3>
      <h3>{desc}</h3>
    </div>
  );
};

export default Title;
