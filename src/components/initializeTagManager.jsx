// gtm.js
import TagManager from "react-gtm-module";
const gtmId = "GT-5MJWRR7G"; // Replace with your GTM ID

export const initializeTagManager = () => {
  TagManager.initialize({ gtmId });
};