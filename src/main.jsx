import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./Pages/login";
import HomePage from "./Pages/home";
import BedroomPage from "./Pages/bedroom";
import LivingroomPage from "./Pages/livingroom";
import KitchendiningPage from "./Pages/kitchendining";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/bedroom",
    element: <BedroomPage />,
  },
  {
    path: "/livingroom",
    element: <LivingroomPage />,
  },
  {
    path: "/kitchendining",
    element: <KitchendiningPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
