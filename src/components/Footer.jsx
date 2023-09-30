import { useMediaQuery } from "@mui/material";
import React from "react";

const Footer = () => {
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  return (
    <>
      {isNonMobile ? (
        <div className="text-light bg-dark py-3">
          <div className="container">
            <div className="row">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <h2 className="">Past Time Entertainment</h2>
              </div>

              <div className="col-3">
                <h2 className="">Explore</h2>
                <div className="col">
                  <div className="mb-3 ">Home</div>
                  <div className="mb-3">Products</div>
                  <div className="mb-3">Events</div>
                  <div className="mb-3">Training</div>
                </div>
              </div>

              <div className="col-3">
                <h2 className="">Support</h2>
                <div className="col">
                  <div className="mb-3">FAQs</div>
                  <div className="mb-3">Review</div>
                  <div className="mb-3">Training</div>
                  <div className="mb-3">About</div>
                </div>
              </div>

              <div className="col-3">
                <h2 className="">Contacts</h2>
                <div className="col">
                  <div className="mb-3">simplygaming@gmail.com</div>
                  <div className="mb-3">simplygaming.in</div>
                  <div className="mb-3">simplygaming@facebook</div>
                  <div className="mb-3">+91 99877 94974</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="accordion bg-dark" id="accordionExample">
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header bg-dark">
                <button
                  className="accordion-button bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse  bg-dark"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header bg-dark">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse bg-dark"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-dark text-light">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header bg-dark">
                <button
                  className="accordion-button collapsed bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse bg-dark"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-dark text-light">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-dark text-light p-3 text-center">
        <span>
          © Copyright 2023 | All Rights Reserved Past Time Entertainment
        </span>
      </div>
    </>
  );
};

export default Footer;
