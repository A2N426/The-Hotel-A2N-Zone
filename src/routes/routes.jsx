import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layoutes/Main/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Book from "../pages/Book/Book";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/rooms.json')
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: 'book/:id',
                element: <PrivateRoute><Book></Book></PrivateRoute>,
                loader:()=>fetch('/rooms.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;