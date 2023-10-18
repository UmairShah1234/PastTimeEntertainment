import { Card, CardMedia, Typography, useMediaQuery } from "@mui/material";
import events from "../data/events";
import "./HoverEvents.css";
import Maps from "./Maps";
const HoverEvents = ({ place, side }) => {
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  const center = {
    lat: 19.097836021741266,
    lng: 72.87460290456298
    
  };
  // const innerValue = Object.keys(events).map((eventKey) => 
  // console.log(Object.keys(events).map((eventKey) => {events[eventKey][center]}))
  return (
    <>
      {isNonMobile ? (
        <div className="d-flex">
          {Object.keys(events).map((eventKey) => {
            const { lat, long } = events[eventKey].center; 
            const center = { lat, lng: long };
            return (
              <Card
                className="position-relative bg-dark overflow-hidden mb-4 mx-1"
                key={eventKey}
                elevation={20}
                sx={{ height: "350px", display: "flex" }}
              >
                {/* transition ease-in-out duration-600 */}
                <Typography
                  className="position-absolute d-flex align-items-center justify-content-center  "
                  variant="p"
                  component="div"
                >
                  {/* {events[eventKey].desc} */}
                  <Maps center={center} width="210px" height="350px"/>
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
        <div className="d-flex" >
          <div className="row justify-content-around" >
        {Object.keys(events).map((eventKey) => {
          const { lat, long } = events[eventKey].center; 
          const center = { lat, lng: long };
          return (
            <Card
              className="col-4 d-flex position-relative bg-dark overflow-hidden mx-1 mb-4 "
              key={eventKey}
              elevation={20}
              sx={{ height: "350px", width: "175px", padding: "0px" }}
            >
              {/* transition ease-in-out duration-600 */}
              <Typography
                className="position-absolute d-flex align-items-center justify-content-center  "
                variant="p"
                component="div"
              >
                {/* {events[eventKey].desc} */}
                <Maps center={center} width="175px" height="350px" />
              </Typography> 
              <CardMedia
                component={"img"}
                // style={{width: "100%"}}
                className="img_transition"
                src={events[eventKey].img[0]}
              />
            </Card>
          );
        })}
        </div>
      </div>
      )}
    </>
  );
};

export default HoverEvents;
