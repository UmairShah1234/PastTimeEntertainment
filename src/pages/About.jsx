import React from "react";
import {
  CheckCircleOutlineOutlined,
  Psychology,
  ShoppingCartCheckout,
  SupportAgent,
} from "@mui/icons-material";

const About = () => {
  return (
    <div className="bg-dark text-light ">
      <div className="container">
        <div className="card-title pt-3 pb-1">
          <h2 className="">Learn More About Us</h2>
        </div>

        <hr />
        <div>
          <div className="row">
            <div className="col-md-8 p-3">
              <h2 className="text-danger">Latest And Finest Technologies</h2>
              <p>
                VR (Virtual Reality) gaming and simulator gaming are two
                distinct but related experiences in the world of video gaming.
                They both offer immersive and interactive gameplay, but they
                differ in terms of technology, hardware, and the type of
                experiences they provide. <br />
                VR gaming is a type of gaming that immerses players in a
                computer-generated virtual environment using a VR headset and
                motion-tracking controllers. It aims to provide a sense of
                presence, allowing players to feel as though they are physically
                present in the virtual world. <br />
                Simulator gaming involves playing video games that simulate
                real-world activities or experiences, such as driving, flying,
                farming, construction, or sports. These games aim to provide a
                realistic and often educational experience
              </p>
              <button className="btn text-danger btn-outline-info">
                Check More
              </button>
            </div>

            <div className="col-md-4">
              <div className="card shadow-lg p-1 bg-dark">
                <div className="card-body">
                  <img
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                    height={"200px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-3 container mt-3">
          <h2 className="text-danger">Who Are We?</h2>
          <div>
            <p>
              At Pastime Entertainment, we bring innovation and excitement to
              your events and brand advertising campaigns through the
              cutting-edge world of Virtual Reality (VR). With a passion for
              delivering unforgettable experiences, we specialize in infusing
              your gatherings with a dose of technological marvel. Our
              state-of-the-art VR setups and immersive content guarantee that
              your event becomes an unforgettable adventure, leaving a lasting
              impression on your guests and enhancing your brand's presence. We
              thrive on pushing boundaries, bridging reality with the virtual
              realm to craft moments that resonate. Join us on this thrilling
              journey, where we transform ordinary events into extraordinary
              memories and elevate your brand to new heights
            </p>
          </div>
        </div>

        <div className="pb-3 container mt-3">
          <h2 className="text-danger">What We Do?</h2>
          <div>
            <p>
              At Pastime Entertainment, we bring innovation and excitement to
              your events and brand advertising campaigns through the
              cutting-edge world of Virtual Reality (VR). With a passion for
              delivering unforgettable experiences, we specialize in infusing
              your gatherings with a dose of technological marvel. Our
              state-of-the-art VR setups and immersive content guarantee that
              your event becomes an unforgettable adventure, leaving a lasting
              impression on your guests and enhancing your brand's presence. We
              thrive on pushing boundaries, bridging reality with the virtual
              realm to craft moments that resonate. Join us on this thrilling
              journey, where we transform ordinary events into extraordinary
              memories and elevate your brand to new heights
            </p>
          </div>
        </div>

        <div className="p-3 ">
          <h2 className="text-danger  text-center border-bottom p-3">
            All About Our Services
          </h2>

          <div className="">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex shadow-lg flex-column m-1 p-3 ">
                  <div className="text-center">
                    <CheckCircleOutlineOutlined sx={{ fontSize: 100 }} />
                  </div>
                  <h3>100% Satisfaction Guarantee</h3>
                  <div>
                    <p>
                      We strive to establish a good relationship with consumers
                      and provide exceptional services to garner 100%
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column m-1 shadow-lg  p-3 ">
                  <div className="text-center">
                    <Psychology sx={{ fontSize: 100 }} />
                  </div>
                  <h3>Technical expertise</h3>
                  <div>
                    <p>
                      We offer unparalleled technical expertise. From setup to
                      troubleshooting, our team ensures a flawless VR
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column m-1 shadow-lg  p-3">
                  <div className="text-center">
                    <SupportAgent sx={{ fontSize: 100 }} />
                  </div>
                  <h3>Customer Centric</h3>
                  <div>
                    <p>
                      We're all about being customer-centric. Your satisfaction
                      is our top priority, and we tailor every VR experience to
                      meet your unique needs and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex flex-column m-1 shadow-lg p-3 ">
                  <div className="text-center">
                    <ShoppingCartCheckout sx={{ fontSize: 80 }} />
                  </div>
                  <h3>One Stop Shop</h3>
                  <div>
                    <p>
                      At Pastime Entertainment, we're your one-stop VR solution.
                      From planning to execution, we handle it all, making your
                      VR experience seamless and unforgettable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column m-1 shadow-lg  p-3">
                  <div className="text-center">
                    <CheckCircleOutlineOutlined sx={{ fontSize: 100 }} />
                  </div>
                  <h3>Infinite Experiences</h3>
                  <div>
                    <p>
                      our vast catalog ensures there's something for everyone.
                      We offer an extensive range of VR adventures to suit all
                      tastes and preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column m-1  shadow-lg p-3">
                  <div className="text-center">
                    <CheckCircleOutlineOutlined sx={{ fontSize: 100 }} />
                  </div>
                  <h3>Unforgettable experience</h3>
                  <div>
                    <p>
                      At Pastime Entertainment, we deliver an experience like no
                      other. Our VR adventures redefine entertainment, leaving
                      you with unforgettable memories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
