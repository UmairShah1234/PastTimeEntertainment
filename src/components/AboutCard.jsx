import React from "react";

const AboutCard = () => {
  return (
    <div className="card shadow-lg bg-dark text-light">
      <div className="card-body">
        <h2 className="card-title my-3 text-danger">
          About <br />
          <span className=" border-bottom border-primary border-2 text-light">
            Past Time Entertainent
          </span>
        </h2>
        <p className="card-text my-3 p-3 ">
          At Pastime Entertainment, we bring innovation and excitement to your
          events and brand advertising campaigns through the cutting-edge world
          of Virtual Reality (VR). With a passion for delivering unforgettable
          experiences, we specialize in infusing your gatherings with a dose of
          technological marvel. Our state-of-the-art VR setups and immersive
          content guarantee that your event becomes an unforgettable adventure,
          leaving a lasting impression on your guests and enhancing your brand's
          presence. We thrive on pushing boundaries, bridging reality with the
          virtual realm to craft moments that resonate. Join us on this
          thrilling journey, where we transform ordinary events into
          extraordinary memories and elevate your brand to new heights
        </p>
        <button className="btn-outline-danger btn rounded-0 text-light">
          Know More About Us 
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
