import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import About from "../../pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <About></About> }
        ]
    }
])