import React from "react";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                tenetur beatae laborum earum laudantium quaerat sit porro eaque
                id vel sequi dolor doloribus, eligendi saepe! Illo delectus nam
                asperiores nobis! <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                tenetur beatae laborum earum laudantium quaerat sit porro eaque
                id vel sequi dolor doloribus, eligendi saepe! Illo delectus nam
                asperiores nobis!Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Fugit, tenetur beatae laborum earum laudantium
                quaerat sit porro eaque id vel sequi dolor doloribus, eligendi
                saepe! Illo delectus nam asperiores nobis!
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
          <h2 className="text-danger  text-center border-bottom p-3">All About Our Services</h2>

          <div className="row">
            <div className="col-md-12 d-flex">
              <div className="d-flex shadow-lg flex-column m-1 p-3">
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

              <div className="d-flex flex-column m-1 shadow-lg  p-3">
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

              <div className="d-flex flex-column m-1 shadow-lg  p-3">
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
          </div>

          <div className="row">
            <div className="col-md-12 d-flex">
              <div className="d-flex flex-column m-1 shadow-lg p-3">
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

              <div className="d-flex flex-column m-1 shadow-lg  p-3">
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

              <div className="d-flex flex-column m-1  shadow-lg p-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
