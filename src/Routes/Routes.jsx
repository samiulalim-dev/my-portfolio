import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
