import { Info } from "@mui/icons-material";
import React from "react";

const InquireModal = () => {
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
            <div className="modal-body">
              <div>
                <form action="">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-dark text-light"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      type="text"
                      className="form-control bg-dark text-light"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    
                  </div>
                </form>
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
              <button type="button" className="btn btn-outline-danger">
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquireModal;
