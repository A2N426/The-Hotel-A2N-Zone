import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layoutes/Main/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Book from "../pages/Book/Book";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/public/data/rooms.json')
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/book',
                element:<Book></Book>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
]);

export default router;