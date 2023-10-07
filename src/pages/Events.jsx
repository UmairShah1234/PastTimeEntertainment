import EventCard from "../components/EventCard";
import ReviewCard from "../components/ReviewCard";

const Events = () => {
  return (
    <div className="bg-dark text-light p-3">
      <EventCard />
      <div className="container">
        {/* review section */}
        <div>
          <hr />
          <h3>Check What Our Customer Got Say About Us!!!</h3>
          <div className="p-3 row">
            <div className="row">
              <div className="col-md-4">
                <ReviewCard
                  rating={4.5}
                  desc={
                    "Overall, I had a wonderful experience at the gaming activities hosted by Pastime Entertainmen. The service and expertise that the company provided was top-notch. I would highly recommend to anyone looking for a professional and enjoyable gaming experience."
                  }
                />
              </div>
              <div className="col-md-4">
                <ReviewCard
                  rating={4.5}
                  desc={
                    "Pastime Entertainment Company provides a variety of training modules for corporate offices, including team building VR training. Their team building VR training module is a highly immersive and engaging experience that can help teams improve their communication, collaboration, and problem-solving skills"
                  }
                />
              </div>
              <div className="col-md-4">
                <ReviewCard
                  rating={4}
                  desc={
                    "One of the things that sets AR based Motion games apart from other games is their focus on physical activity. This makes the games more immersive and engaging, and it also encourages players to get up and move around."
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <ReviewCard
                  rating={4}
                  desc={
                    "Pastime Entertainment's VR Walk the Plank experience is one of the best available. The staff is friendly and knowledgeable, and they take the time to make sure you're comfortable and safe before you start the experience.The VR headset is high-quality and provides a clear and immersive experience. The plank feels solid and realistic.I highly recommend the VR Walk the Plank experience at Pastime Entertainment. It's a fun and exciting way to try something new and experience VR in a unique way"
                  }
                />
              </div>
              <div className="col-md-6">
                <ReviewCard
                  rating={4}
                  desc={
                    "One of the things that sets AR based Motion games apart from other games is their focus on physical activity. This makes the games more immersive and engaging, and it also encourages players to get up and move around."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
