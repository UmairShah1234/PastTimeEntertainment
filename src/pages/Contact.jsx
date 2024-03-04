import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  /* The commented code is making a POST request to a local server at
  "http://localhost:8000/contact_form.php" with the form data as the request body. It is using the
  axios library to send the request. The request is being sent with the Content-Type header set to
  "application/json". However, this code is currently commented out and not being executed. */
      // const response = await axios.post(
      //   "http://localhost:8000/contact_form.php",
      //   new URLSearchParams(formData), {
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      // }
      // );
  
      const response = await axios.post(
        "https://pastimeentertainment.in/contact_form.php",
        new URLSearchParams(formData), {
          headers: {
            // 'Content-Type': 'text/html',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
      }
      );
  // console.log("email sent", response);
      setShowSuccessAlert(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      // console.error("Error sending email:", error);
      setShowErrorAlert(true);
    }
  };
  return (
    <div className="bg-dark text-light p-3">
      {showSuccessAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Thank you!</strong> For submitting your information we will
          get back to you soon.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      )}
      {showErrorAlert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Oops!</strong>There was some problem while submitting the
          form, Please try Submitting again.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      )}

      <div className="container p-3">
        <h3 className="card-title">Want To Connect with Us?</h3>
        <p>Fill the details given below to connect to us</p>

        <hr />

        <div className="card bg-dark p-3 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="row row-cols-lg-2 row-cols-1">
              <div className="mb-3 mx-1 ">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  id="textInput"
                  aria-describedby="textHelp"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                  Your Details are completely secure.
                </div>
              </div>
              <div className="mb-3 mx-1 ">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control bg-dark text-light"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div id="emailHelp" className="form-text">
                  Your Details are completely secure.
                </div>
              </div>
              <div className="mb-3 ">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control bg-dark text-light"
                  id="exampleInputPassword1"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Your Message About</label>
              <textarea
                rows={5}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
