import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";

const Loading = <div className="bg-red-700">Loading ...</div>;
const Main = lazy(() => import("../pages/MainPage"));

const About = lazy(() => import("../pages/AboutPage"));

const IndexPage=lazy(()=>import("../pages/todo/IndexPage"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path:"todo",
        element:<Suspense fallback={Loading}><IndexPage /></Suspense>,
        children: todoRouter()
    }
]);

export default root;