import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

// const apiKey = "AIzaSyBBLceyEIM_o7hbzub4CBI4BrVifOtKmO0";

const Maps = ({center, width, height}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBm0It5eFeN2RtRuQ85kaTY38IsxjEGVdg",
  });
  
  const options ={streetViewControl: false, mapTypeControl:false,  fullscreenControl: false}
  const mapContainerStyle = {
    width: width, // Set the width from props
    height: height, // Set the height from props
  };
console.log(isLoaded)
  return (
    <>
      {isLoaded ? (
        // <div>Map</div>
        <GoogleMap center={center} zoom={13} mapContainerStyle={mapContainerStyle}  options={options}>
          <MarkerF position={center} />
        </GoogleMap>
      ) : (
        <div>Not able to load maps</div>
      )}
    </>
  );
};

export default Maps;
