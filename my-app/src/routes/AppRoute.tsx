import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../components/Layout"))
const Home = lazy(() => import("../pages/Home"))

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])

export default AppRoutes