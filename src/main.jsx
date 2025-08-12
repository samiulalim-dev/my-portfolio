import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1000,
  once: false,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
