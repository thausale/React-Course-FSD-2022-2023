import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DonaldDetail from "./components/DonaldDetail";
import "./index.css";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/api/:id",
    element: <DonaldDetail />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
