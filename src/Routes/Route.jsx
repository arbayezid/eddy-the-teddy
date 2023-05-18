import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Home";
import AddToy from "../pages/AddToy";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/addToy',
          element: <AddToy></AddToy>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ])
export default router;