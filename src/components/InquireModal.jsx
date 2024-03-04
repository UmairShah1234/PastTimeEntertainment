import { Info } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import { useState } from "react";

const InquireModal = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      // await axios.post("/api/send-inquiry", formData);
      // await axios.post("http://localhost:5000/api/send-inquiry", formData);
      // await axios.post("http://localhost:8000/inquire_form.php",    new URLSearchParams(formData));
      const response =   await axios.post("https://pastimeentertainment.in/inquire_form.php",    new URLSearchParams(formData), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    }
    );
    // console.log("email sent", response);
      setShowSuccessAlert(true);

      setFormData({
        name: "",
        email: "",

        message: "",
      });
    } catch (error) {
      setShowErrorAlert(true);
    }
  };
  return (
    <>
      <div
        className="modal fade "
        tabindex="-1"
        id="exampleModal"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title">
                <Info /> Inquire About the training
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="modal-body">
                {showSuccessAlert && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Thank you!</strong> For submitting your information
                    we will get back to you soon.
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
                    <strong>Oops!</strong>There was some problem while
                    submitting the form, Please try Submitting again.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    />
                  </div>
                )}
                <div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      type="text"
                      className="form-control bg-dark text-light"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-outline-danger">
                  Inquire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquireModal;
