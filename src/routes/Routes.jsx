import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/components/homepage/Homepage";
import FriendDetails from "../pages/components/friendDetails/FriendDetails";
import TimelinePage from "../pages/components/TimelinePage/TimelinePage";
import Stats from "../pages/components/Stats/Stats";
import ErrorPage from "../pages/components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
      },
      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
  },
]);