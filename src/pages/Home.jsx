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
                  <div className="col">
                    <ProductCard
                      title={"VR"}
                      desc={
                        "VR gaming offers a unique and immersive way to experience video games by allowing players to step into virtual worlds and interact with them in ways that were previously impossible with traditional gaming setups"
                      }
                      links={"vrcricket"}
                    />
                  </div>
                  <div className="col">
                    <ProductCard
                      title={"Simulator"}
                      desc={
                        "Racing simulator event experience is a gathering or exhibition that provides participants with an opportunity to immerse themselves in the world of motorsports and experience the thrill of racing through the use of high-quality racing simulators."
                      }
                      links={"F1simulator"}
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <ProductCard
                      title={"AR"}
                      desc={
                        "An AR (Augmented Reality) event experience is an immersive and interactive encounter that combines the physical world with digital elements to provide attendees with a unique and engaging event."
                      }
                      links={"arSports"}
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <ProductCard
                      title={"Console"}
                      desc={
                        "A gaming PC event experience is an immersive gathering or exhibition centered around gaming, PC hardware, and the gaming community. These events can vary in scale from small local meetups to large conventions and provide attendees with opportunities to explore the latest gaming technologies, play video games, interact with industry professionals, and connect with fellow gamers"
                      }
                      links={"Gamingpc"}
                    />
                  </div>
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
