import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        element: <Rooms />,
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allRooms/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
