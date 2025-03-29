const injectDrawer = (): void => {
  const existingIframe = document.getElementById("peopledb-extension-root");
  if (existingIframe) {
    document.body.removeChild(existingIframe);
  }

  const iframe = document.createElement("iframe");
  iframe.id = "peopledb-extension-root";
  iframe.src = chrome.runtime.getURL("content.html");
  iframe.style.cssText = `
    position: fixed;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 100vh;
    border: none;
    z-index: 100000;
  `;

  document.body.appendChild(iframe);

  iframe.onload = () => {
    setTimeout(() => {
      iframe.contentWindow?.postMessage({ type: "OPEN_PEOPLEDB_DRAWER" }, "*");
    }, 300);
  };
};

const createStaticButton = (): void => {
  if (document.querySelector(".peopledb-static-button")) return;

  const button = document.createElement("button");
  button.className = "peopledb-static-button";
  button.innerText = "Open PeopleDB Drawer";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "10px",
    backgroundColor: "#0A66C2",
    color: "white",
    padding: "12px 24px",
    borderRadius: "24px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    zIndex: "99999",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  });

  // Add hover effect
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#004182";
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#0A66C2";
  });

  button.addEventListener("click", () => {
    injectDrawer();
  });

  document.body.appendChild(button);
};

// Ensure the button is always visible and stays on page after navigation
const ensureButtonExists = (): void => {
  if (!document.querySelector(".peopledb-static-button")) {
    createStaticButton();
  }
};

window.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CLOSE_PEOPLEDB_DRAWER") {
    const frame = document.getElementById("peopledb-extension-root");
    if (frame) {
      document.body.removeChild(frame);
    }
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "openDrawer") {
    injectDrawer();
  }
});

window.addEventListener("load", ensureButtonExists);
window.addEventListener("popstate", ensureButtonExists);

const observer = new MutationObserver(() => {
  ensureButtonExists();
});

if (window.location.hostname.includes("linkedin.com")) {
  ensureButtonExists();
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(ensureButtonExists, 2000);
}
