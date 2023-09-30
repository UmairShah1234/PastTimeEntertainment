import React from "react";

const Contact = () => {
  return (
    <div className="bg-dark text-light p-3">
      <div className="container p-3">
        <h3 className="card-title">Want To Connect with Us?</h3>
        <p>Fill the details given below to connect to us</p>

        <hr />

        <div className="card bg-dark p-3 shadow-lg">
          <form>
            <div className="row row-cols-lg-2 row-cols-1">
              <div className="mb-3 mx-1 ">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control bg-dark text-light"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Your Details are completely secure.
                </div>
              </div>
              <div className="mb-3 ">
                <label for="exampleInputPassword1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  id="exampleInputPassword1"
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="exampleMessage" className="form-label">
                Your Message About
              </label>
              <textarea
              rows={5}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleMessage"
              />
            </div>

            <button type="button" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
