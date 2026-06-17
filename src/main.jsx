import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import TimelineProvider from "./pages/components/context/TimelineContext";
import { ToastContainer } from "react-toastify";



createRoot(document.getElementById("root")).render(
  <StrictMode>
      <TimelineProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </TimelineProvider> 
  </StrictMode>,
);