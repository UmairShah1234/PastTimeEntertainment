import {  Card,  CardMedia, Typography } from "@mui/material";
import events from "../data/events";
import "./HoverEvents.css"
const HoverEvents = ({ place, side }) => {
  // if (side === 'left') {
  //     return (
  //         <Card elevation={20} sx={{ display: "flex" }}>

  //             <CardMedia
  //                 className='w-3/4 h-52 hover:w-1/2'
  //                 component={'img'}
  //                 sx={{ width: 250 }}
  //                 src='https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  //             />
  //             {/* <Box sx={{ flex: "1 0 auto" }}>
  //                 <CardContent>

  //                 </CardContent>
  //             </Box> */}
  //         </Card>
  //     )
  // }
  return (
    <>
    {Object.keys(events).map((eventKey) => {
      return(
            <Card className="position-relative bg-dark overflow-hidden mb-4" key={eventKey}  elevation={20} sx={{ height: "300px",display: "flex" }}>
            {/* <Box sx={{ flex: "1 0 auto" }} >
                      <CardContent>
      
                      </CardContent>
                  </Box> */}
           
            
            <Typography
                className="position-absolute text-white d-flex align-items-center justify-content-center transition ease-in-out duration-600 "
                variant="h6"
                component="div"
              >
              {events[eventKey].desc}
              </Typography>
              <CardMedia
              component={"img"}
              // hover:w-1/2  w-3/4
              className="img_transition  "
              src={events[eventKey].img[0]}
            />
              
          </Card>
      )
        
    })}
    </>
  );
};

export default HoverEvents;
