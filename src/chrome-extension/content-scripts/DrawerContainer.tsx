import { createRoot } from "react-dom/client";
import { Drawer } from "../components/Drawer";

const createDrawerContainer = () => {
  const container = document.createElement("div");
  container.id = "peopledb-drawer-root";
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<Drawer />);
};

// Create drawer container on initial load
if (window.location.hostname.includes("linkedin.com")) {
  createDrawerContainer();
}

// Listen for navigation events to ensure drawer persists
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === "childList" &&
      !document.getElementById("peopledb-drawer-root")
    ) {
      createDrawerContainer();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
