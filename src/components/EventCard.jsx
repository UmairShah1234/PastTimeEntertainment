import React, { useState } from "react";
import Box from "@mui/material/Box";
import events from "../data/events";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image = string, size = number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const EventCard = () => {
  const [selectedEvent, setSelectedEvent] = useState("Ar_Sports");
  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };
  // style="height: 20px;"
  return (
    <Box className="d-flex flex-column bg-dark   ">
      <h2 className="py-3 text-white text-center">Check Out All Our Events</h2>
      <div className="d-flex justify-content-around ">
        <select
          className="bg-dark btn btn-outline-danger  text-white"
          value={selectedEvent}
          onChange={handleEventChange}
        >
          {Object.keys(events).map((eventKey) => (
            // console.log(eventKey)
            <option className="" key={eventKey} value={eventKey}>
              {events[eventKey].title}
            </option>
          ))}
        </select>
      </div>
      <Box className="d-flex flex-row row p-5" sx={{ width: "100vw" }}>
        <Box className="col text-center text-white ">
          <p>{events[selectedEvent].desc}</p>
        </Box>
        <Box className="col">
          <ImageList
            className="bg-dark shadow-lg border-0"
            sx={{ border: "1px dashed grey", height: "100vh" }}
            variant="quilted"
            cols={3}
            rowHeight={500}
          >
            {events[selectedEvent].img.map((image, index) => (
              <ImageListItem
                key={index}
                cols={image.cols || 1}
                rows={image.rows || 1}
              >
                <img
                  {...srcset(image, 121, image, image)}
                  // alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;
