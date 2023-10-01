import React from "react";

const Training = () => {
  return (
    <div className="bg-dark text-light">
      <h2 className="text-center p-3">
        Check Out Some of Our Latest Training Modules
      </h2>
      <div className="container p-3 ">
        {/* conflict management */}
        <div className="p-3 shadow-lg m-3">
          <div className="d-flex">
            <div>
              <h3 className="text-danger text-center p-3">
                Conflict Management
              </h3>
              <p className="p-1 text-center d-flex  align-items-center">
                In the face of rising aggression and violence against frontline
                staff, ensuring health, safety, and well-being compliance has
                become increasingly challenging. It's critical to provide
                frontline employees with effective strategies to de-escalate
                conflicts and maintain their safety. Our fully immersive VR
                training empowers learners to safely handle conflict situations
                using proven techniques, fostering resilience and boosting
                confidence.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn-outline-info rounded-0 btn ">
                  Inquire
                </button>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              height={"200px"}
            />
          </div>
        </div>

        <div className="p-3 shadow-lg m-3">
          <div className="d-flex">
            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              height={"200px"}
            />
            <div>
              <h3 className="text-danger text-center p-3">Mental Wellness</h3>
              <p className="p-1 text-center d-flex align-items-center">
                In a tranquil and open setting, participants take a guided break
                at the square using the Mental Wellness app. Here, they delve
                into the four crucial components of Emotional Intelligence:
                self-awareness, self-management, social awareness, and
                relationship management.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn-outline-info rounded-0 btn ">
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 shadow-lg m-3">
          <div className="d-flex">
            <div>
              <h3 className="text-danger text-center">Hazard Management </h3>
              <p className="p-1 text-center d-flex align-items-center ">
                The Hazard Management module transforms conventional health and
                safety training into an engaging experience. Participants gain
                the expertise to conduct comprehensive health and safety risk
                assessments. They learn to apply these assessments and implement
                appropriate controls relevant to their specific roles, aligning
                with regulatory mandates and industry benchmarks.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn-outline-info rounded-0 btn ">
                  Inquire
                </button>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              height={"200px"}
              className=""
            />
          </div>
        </div>

        <div className="p-3 shadow-lg m-3">
          <div className="d-flex">
            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              height={"200px"}
            />
            <div>
              <h3 className="text-danger text-center">Sustainability</h3>
              <p className="p-1 text-center d-flex align-items-center">
                The Sustainability training module captivates learners with
                immersive scenarios designed to inspire positive contributions
                to communities and future leaders. By visualizing real-life
                consequences of individual environmental choices in daily life,
                it fosters a deeper understanding of their impact.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn-outline-info rounded-0 btn ">
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
