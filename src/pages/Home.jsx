import React from "react";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import CarouselComp from "../components/CarouselComp";
import AboutCard from "../components/AboutCard";
import HoverEvents from "../components/HoverEvents";
import cricket from "../assets/VR Cricket.png";
import sim from "../assets/F1 Simulator.png";
import sport from "../assets/AR Sports.png";
import ocl from "../assets/console.jpg";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  return (
    <div className="bg-dark text-light p-1 text-center">
      {/* Carousel */}
      <div className="mb-3">
        <CarouselComp />
      </div>
      {/* Products */}
      {isNonMobile ? (
        <>
          <Title title={"Check Out Our Featured Products"} />
          <div className="">
            <div className="d-flex justify-content-center align-items-center ">
              <div className="row p-3">
                <div className="col">
                  <ProductCard
                    title={"VR"}
                    desc={
                      "VR gaming offers a unique and immersive way to experience video games by allowing players to step into virtual worlds and interact with them in ways that were previously impossible with traditional gaming setups"
                    }
                    links={"vrcricket"}
                    img={cricket}
                  />
                </div>
                <div className="col">
                  <ProductCard
                    title={"Simulator"}
                    desc={
                      "Racing simulator event experience is a gathering or exhibition that provides participants with an opportunity to immerse themselves in the world of motorsports and experience the thrill of racing through the use of high-quality racing simulators."
                    }
                    links={"F1simulator"}
                    img={sim}
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
                    img={sport}
                  />
                </div>
                <div className="col">
                  {" "}
                  <ProductCard
                    title={"Gaming PC"}
                    desc={
                      "A gaming PC event experience is an immersive gathering or exhibition centered around gaming, PC hardware, and the gaming community. These events can vary in scale from small local meetups to large conventions and provide attendees with opportunities to explore the latest gaming technologies, play video games, interact with industry professionals, and connect with fellow gamers"
                    }
                    links={"Gamingpc"}
                    img={ocl}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Title title={"Check Out Our Featured Products"} isPresent={1}/>
          {/* <div className=""> */}
          <div className="">
            <div className="row p-3 ">
              <div className="col d-flex justify-content-center align-items-center">
                <ProductCard
                  title={"VR"}
                  desc={
                    "VR gaming offers a unique and immersive way to experience video games by allowing players to step into virtual worlds and interact with them in ways that were previously impossible with traditional gaming setups"
                  }
                  links={"vrcricket"}
                  img={cricket}
                />
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <ProductCard
                  title={"Simulator"}
                  desc={
                    "Racing simulator event experience is a gathering or exhibition that provides participants with an opportunity to immerse themselves in the world of motorsports and experience the thrill of racing through the use of high-quality racing simulators."
                  }
                  links={"F1simulator"}
                  img={sim}
                />
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                {" "}
                <ProductCard
                  title={"AR"}
                  desc={
                    "An AR (Augmented Reality) event experience is an immersive and interactive encounter that combines the physical world with digital elements to provide attendees with a unique and engaging event."
                  }
                  links={"arSports"}
                  img={sport}
                />
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                {" "}
                <ProductCard
                  title={"Console"}
                  desc={
                    "A gaming PC event experience is an immersive gathering or exhibition centered around gaming, PC hardware, and the gaming community. These events can vary in scale from small local meetups to large conventions and provide attendees with opportunities to explore the latest gaming technologies, play video games, interact with industry professionals, and connect with fellow gamers"
                  }
                  links={"Gamingpc"}
                  img={ocl}
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </>
      )}

      {/* about card */}
      <div className="container mb-5">
        <AboutCard />
      </div>

      {/* client marquee section */}
      <div>
        <marquee>
          <img
            src="https://www.investopedia.com/thmb/yWopXC98WleAk2BKf0jgqcDUM2E=/fit-in/1500x1000/filters:format(png):fill(white):max_bytes(150000):strip_icc()/bofa_lo2_rgb_Digital-20d4dc2ee16d4412a0722dd5923c13e7.jpg"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />
          <img
            src="https://seeklogo.com/images/M/McLaren-logo-6D13A50642-seeklogo.com.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/cd/ICAI_logo.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/en/2/21/Red_Chillies_Entertainment_logo.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          /> */}
          <img
            src="https://getvectorlogo.com/wp-content/uploads/2018/12/icici-bank-vector-logo.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />
          <img
            src="https://i.pinimg.com/originals/74/ea/81/74ea81de637ec497ca21a83bfd4b886f.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />{" "}
          <img
            src="https://blog.logomyway.com/wp-content/uploads/2021/06/monster-logo-2-1.jpg"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />{" "}
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/Red-Bull-logo.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1317px-T-series-logo.svg.png"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />
          <img
            src="https://static.brandirectory.com/logos/dhla001_a08f794d_91af_4b74_83b4_82f7356c232d.jpg"
            alt=""
            height={150}
            width={200}
            className="mx-1"
          />
        </marquee>
      </div>

      {/* events section */}

      <div className="container mb-5">
        <h3 className="p-1">
          <Link className="text-decoration-none" to={"/events"}>
            <span className="border-bottom border-2 text-light">
              Check Out On Our Grandest Events Hosted <KeyboardArrowRight />
            </span>
          </Link>
        </h3>
        <HoverEvents />
      </div>
    </div>
  );
};

export default Home;
