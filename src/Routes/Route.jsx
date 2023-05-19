import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Home";
import AddToy from "../pages/AddToy";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import ErrorPage from "../pages/ErrorPage";

import PrivateRoute from "./PrivateRoute";
import SingleToyDetails from "../pages/SIngleToyDetails";

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
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
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
          element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/all-toys/${params.id}`)
        },
        {
          path: '/myToys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
      ]
    },
  ])
export default router;