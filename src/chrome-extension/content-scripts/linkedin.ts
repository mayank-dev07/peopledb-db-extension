const createStaticButton = () => {
  const button = document.createElement("button");
  button.className = "peopledb-static-button";
  button.innerHTML = "Open PeopleDB Drawer";

  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 0px;
    background-color: #0A66C2;
    color: white;
    padding: 12px 24px;
    border-radius: 24px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    z-index: 9999;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
  `;

  // Hover effects
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#004182";
    button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#0A66C2";
    button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  });

  // Click handler for drawer
  button.addEventListener("click", () => {
    console.log("Opening PeopleDB drawer...");
    // TODO: Implement drawer opening functionality
  });

  document.body.appendChild(button);
};

// Function to check if button already exists
const checkAndCreateButton = () => {
  if (!document.querySelector(".peopledb-static-button")) {
    createStaticButton();
  }
};

// Create button on initial load
if (window.location.hostname.includes("linkedin.com")) {
  checkAndCreateButton();
}

// Listen for navigation events to ensure button persists
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === "childList" &&
      !document.querySelector(".peopledb-static-button")
    ) {
      checkAndCreateButton();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
