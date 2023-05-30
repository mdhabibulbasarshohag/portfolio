import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/about", element: <About></About> },
            { path: "/skills", element: <Skills></Skills> },
            { path: "/project", element: <Projects></Projects> },
            { path: "/contact", element: <div>hello contact</div> },
        ]
    }
])