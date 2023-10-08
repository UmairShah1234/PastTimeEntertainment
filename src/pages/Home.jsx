import React from "react";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import CarouselComp from "../components/CarouselComp";
import AboutCard from "../components/AboutCard";
import HoverEvents from "../components/HoverEvents";

const Home = () => {
  return (
    <div className="bg-dark text-light p-1 text-center">
      {/* Carousel */}
      <div className="mb-3">
        <CarouselComp />
      </div>
      {/* Products */}
      <Title title={"Check Out Our Featured Products"} />
      <div className="">
        <div className="d-flex justify-content-center ">
          <div className="row p-3">
            <ProductCard
              title={"VR"}
              desc={
                "VR gaming offers a unique and immersive way to experience video games by allowing players to step into virtual worlds and interact with them in ways that were previously impossible with traditional gaming setups"
              }
            />
            <ProductCard
              title={"Simulator"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            />
            <ProductCard
              title={"AR"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            />
            <ProductCard
              title={"Console"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            />
          </div>
        </div>
      </div>

      {/* about card */}
      <div className="container mb-5">
        <AboutCard />
      </div>

      {/* events section */}

      <div className="container mb-5">
        <HoverEvents />
      </div>
    </div>
  );
};

export default Home;
