import { useLayoutEffect, useState } from "react";
import "../global.css";
import Default from "./components/Default";

export const Popup = () => {
  const [isLinkedIn, setIsLinkedIn] = useState(false);

  useLayoutEffect(() => {
    if (typeof chrome !== "undefined" && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const currentUrl = tabs[0].url;

          if (currentUrl?.includes("linkedin.com")) {
            setIsLinkedIn(true);
          }
        }
      });
    } else {
      console.error(
        "chrome.tabs is not available. Make sure you're in a Chrome extension."
      );
    }
  }, []);

  return <Default isLinkedIn={isLinkedIn} />;
};
