import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //     path: '/details/:id',
      //     element: <PrivateRoute>
      //       <CardDetails />
      //     </PrivateRoute>,
      //     loader: ()=> fetch('/card.json')
      // },
      // {
      //     path: '/login',
      //     element: <Login></Login>

      // },
      // {
      //     path: '/register',
      //     element: <Register></Register>

      // },
    ],
  },
]);

export default router;
