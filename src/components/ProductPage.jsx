import React from "react";
import Avatar from "@mui/material/Avatar";

const ProductPage = ({ title, keypoints, about, usageText, usage, faqs }) => {
  return (
    <div className="bg-dark text-light p-3">
      <div className="container">
        <h2>VR Cricket</h2>

        <div className="my-3">
          {/* header div */}
          <div className="d-flex">
            <Avatar
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              sx={{ height: 150, width: 150 }}
            />
            <div>
              <h3 className="p-3 mx-3">
                <span className="border-bottom">About {title}</span>
              </h3>
              <p className="px-3 mx-3">{about}</p>
            </div>
          </div>

          {/* mid div */}
          <div className="p-3">
            <h3>
              <span className="border-bottom">What Is {title} ?</span>
            </h3>
            <p>Here are some key points about {title}</p>
            <ol>
              {keypoints.map((key) => {
                return <li className="p-2">{key}</li>;
              })}
            </ol>
          </div>

          {/* usage section */}
          <div>
            <h3 className="p-3">
              <span className="border-bottom">Usage Of {title}</span>
            </h3>
            <ul>
              <div>
                <p>{usageText}</p>
                {usage.map((use) => {
                  return <li className="p-2">{use}</li>;
                })}
              </div>
            </ul>
          </div>

          {/* form section */}
          <h3 className="text-center p-3">
            Send Us About Anything you want to know
          </h3>
          <hr />
          <div className="d-flex justify-content-center ">
            <div
              className="card shadow-lg bg-dark text-light"
              style={{ width: "35rem" }}
            >
              <div className="container p-3">
                <form action="">
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control text-light bg-dark"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="message" className="form-label">
                        Want to Know More Or Inquire About VR Cricket
                      </label>
                      <textarea
                        className="form-control bg-dark text-light"
                        id="message"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </form>
              </div>
            </div>
          </div>

          {/* FAQS */}
          <div className="m-3">
            <h3 className="p-3">Frequently Asked Question</h3>
            <div className="accordion bg-dark shadow-lg" id="accordionExample">
              {faqs.map((faq) => {
                return (
                  <div className="accordion-item bg-dark">
                    <h2 className="accordion-header bg-dark">
                      <button
                        className="accordion-button collapsed bg-dark text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.number}`}
                        aria-expanded="false"
                        aria-controls={`collapse${faq.number}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.number}`}
                      className="accordion-collapse collapse bg-dark"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body bg-dark text-light">
                        <div className="mb-3">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="accordion-item bg-dark">
                <h2 className="accordion-header bg-dark">
                  <button
                    className="accordion-button bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is VR cricket for events?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse  bg-dark"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    <div className="mb-3 ">
                      VR cricket for events refers to the use of virtual reality
                      cricket simulations as entertainment or engagement
                      activities at various gatherings, exhibitions, and
                      functions.
                    </div>
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
                    What types of events can incorporate VR cricket?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse bg-dark"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-dark text-light">
                    <div className="mb-3">
                      VR cricket can be integrated into a wide range of events,
                      including corporate meetings, trade shows, sports fan
                      zones, product launches, team-building exercises, and
                      entertainment events.
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark">
                <h2 className="accordion-header bg-dark">
                  <button
                    className="accordion-button collapsed bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Do event attendees need prior experience with VR to play VR
                    cricket?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse bg-dark"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-dark text-light">
                    <div className="mb-3">
                      No, VR cricket experiences can be designed to cater to
                      both experienced VR users and beginners. Many VR cricket
                      setups include tutorials for newcomers.
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-dark">
                <h2 className="accordion-header bg-dark">
                  <button
                    className="accordion-button collapsed bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Is VR cricket suitable for all age groups?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse bg-dark"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-dark text-light">
                    <div className="mb-3">
                      VR cricket can be integrated into a wide range of events,
                      including corporate meetings, trade shows, sports fan
                      zones, product launches, team-building exercises, and
                      entertainment events.
                    </div>
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
                    How many people can play VR cricket simultaneously at an
                    event?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse bg-dark"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-dark text-light">
                    <div className="mb-3">
                      The number of participants depends on the setup and
                      available equipment. Events can have multiple VR stations
                      to accommodate several players simultaneously.
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
