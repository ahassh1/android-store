import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import PhoneDetails from "../pages/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home/>,
        hydrateFallbackElement:<p>Loading , please wait....</p>,
        loader: () => fetch('phones.json')
      }, 
      {
        path: "/favorites",
        Component: Favorites,
        
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/phone-details/:polash",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch('../phones.json')
      },
    ],
  },
]);

export default router;