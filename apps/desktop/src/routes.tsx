import { RouteObject } from "react-router-dom"
import IndexRoute from "./routes/index"
import RootLayout from "./routes/__layout"
import "./styles.css"
import "@twidge/config/colors.css"
import SetupIndex from "./routes/setup"

const final_routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <IndexRoute />,
            },
            {
                path: "/setup",

                element: <SetupIndex />
            }
        ]
    }
]

export default final_routes