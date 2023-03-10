import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./pages/Test";
import CocktailDetail from "./pages/CocktailDetail";
import Layout from "./components/Layout";
import "../css/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/cocktail/:id",
    element: <CocktailDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
