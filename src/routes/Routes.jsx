import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/components/homepage/Homepage";
import FriendDetails from "../pages/components/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path:"/friendDetails/:id",
        Component:FriendDetails
      }
    ],
  },
]);