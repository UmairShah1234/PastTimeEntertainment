// gtm.js
import TagManager from "react-gtm-module";
const gtmId = "GTM-N53MC76P"; // Replace with your GTM ID

export const initializeTagManager = () => {
  TagManager.initialize({ gtmId });
};