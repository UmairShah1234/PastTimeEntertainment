import { Card, CardMedia, Typography, useMediaQuery } from "@mui/material";
import events from "../data/events";
import "./HoverEvents.css";
const HoverEvents = ({ place, side }) => {
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  return (
    <>
      {isNonMobile ? (
        <div className="d-flex">
          {Object.keys(events).map((eventKey) => {
            return (
              <Card
                className="position-relative bg-dark overflow-hidden mb-4 mx-1"
                key={eventKey}
                elevation={20}
                sx={{ height: "350px", display: "flex" }}
              >
                <Typography
                  className="position-absolute text-light p-3  d-flex align-items-center justify-content-center transition ease-in-out duration-600 "
                  variant="p"
                  component="div"
                >
                  {events[eventKey].desc}
                </Typography>
                <CardMedia
                  component={"img"}
                  // hover:w-1/2  w-3/4
                  className="img_transition"
                  src={events[eventKey].img[0]}
                />
              </Card>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default HoverEvents;
