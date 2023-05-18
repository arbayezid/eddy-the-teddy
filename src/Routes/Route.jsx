import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Home";
import AddToy from "../pages/AddToy";

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
      ]
    },
  ])
export default router;