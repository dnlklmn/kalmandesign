import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./theme/global.css";
import "./theme/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RadicleRedesign from "./pages/radicle-redesign.tsx";
import RadicleDesignSystem from "./pages/radicle-design-system.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/radicle-redesign",
    element: <RadicleRedesign />,
  },
  {
    path: "/radicle-design-system",
    element: <RadicleDesignSystem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
