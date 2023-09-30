import React from "react";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import CarouselComp from "../components/CarouselComp";
import AboutCard from "../components/AboutCard";

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
          <div className="row p-5">
            <ProductCard
              title={"VR"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            />
            <ProductCard
              title={"VR"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            />
            <ProductCard
              title={"VR"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            />
            <ProductCard
              title={"VR"}
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

    </div>
  );
};

export default Home;
