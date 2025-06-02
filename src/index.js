import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import "bootstrap/dist/css/bootstrap.min.css";
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
