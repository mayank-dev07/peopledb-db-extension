import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Drawer } from "./components/Drawer";
import "./global.css";

const rootElement = document.getElementById("app");

if (rootElement) {
  console.log("Root element found, rendering drawer");
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <NextUIProvider>
        <main className="text-foreground bg-background light">
          <Drawer />
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found in content.tsx");
}
