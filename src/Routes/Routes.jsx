import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <Error></Error>,
    children: [],
  },
]);
