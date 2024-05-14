import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./Private/PrivateRoute";
import DateChange from "../Pages/DateChange/DateChange";
import Review from "../Pages/Review/Review";
import Featured from "../Pages/Home/Featured/Featured";
import ReviewCard from "../Pages/Review/ReviewCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: (
          <PrivateRoute>
            <Rooms />
          </PrivateRoute>
        ),
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          fetch(
            `https://fairview-hotel-server.vercel.app/allRooms/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/featured",
        element: <Featured />,
      },
      {
        path: "/reviewCard",
        element: <ReviewCard />,
      },
      {
        path: "/reviews/:id",
        element: <Review />,
        loader: ({ params }) =>
          fetch(
            `https://fairview-hotel-server.vercel.app/bookedRoom/${params.id}`
          ),
      },
      {
        path: "/updateDate/:id",
        element: <DateChange />,
        loader: ({ params }) =>
          fetch(
            `https://fairview-hotel-server.vercel.app/bookedRoom/${params.id}`
          ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
