import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Home";
import AddToy from "../pages/AddToy";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import ErrorPage from "../pages/ErrorPage";
import SIngleToyDetails from "../pages/SIngleToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/allToys/:id',
          element: <SIngleToyDetails></SIngleToyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/all-toys/${params.id}`)
        },
        {
          path: '/myToys',
          element: <MyToys></MyToys>
        },
      ]
    },
  ])
export default router;