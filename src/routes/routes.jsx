import { createBrowserRouter } from "react-router";
import App from "../App";
import Favorites from "../Favorites";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<p>error</p>,
    children: [
      {
        path:'/',
        element:<Home/>,
      },
      {
        path: "/favorites",
        Component: Favorites,
        children:[
          {
            path:'more-nested',
            element:<p>I am inside favorites</p>,
          },
        ],
      },
      {
        path: "/about",
        element: <p>this is an about page</p>,
      },
    ],
  },
]);

export default router;