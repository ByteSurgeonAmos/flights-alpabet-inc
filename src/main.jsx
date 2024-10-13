import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GoogleTravelLayout from "./layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleTravelLayout>
      <App />
    </GoogleTravelLayout>
  </StrictMode>
);
