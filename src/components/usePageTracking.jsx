import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TagManager from "react-gtm-module";

const usePageTracking = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // const unlisten = navigate((location) => {
    //   TagManager.dataLayer({
    //     dataLayer: {
    //       event: "pageview",
    //       page: location.pathname + location.search,
    //     },
    //   });
    // });
    
    // Trigger the first pageview manually
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: window.location.pathname + window.location.search,
      },
    });
    
    return () => {
    //   unlisten();
    };
  }, [navigate]);
};

export default usePageTracking;
