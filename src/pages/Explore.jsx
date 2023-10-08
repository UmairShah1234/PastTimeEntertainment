import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Explore = () => {
  return (
    <div className="bg-dark text-light p-3">
      <div className="container">
        <h3 className="py-3">Check Out All Our Products</h3>
        <hr />
        <div className="row row-cols-lg-4 row-cols-1">
          {products.map((product) => {
            return <ProductCard key={product.id} title={product.title} desc={product.desc} links={product.path}/>;
          })}
     
        </div>
      </div>
    </div>
  );
};

export default Explore;
