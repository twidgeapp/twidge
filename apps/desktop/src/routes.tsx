import { RouteObject } from "react-router-dom"
import IndexRoute from "./routes/index"
import RootLayout from "./routes/__layout"

const final_routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <IndexRoute />,
            },
        ]
    }
]

export default final_routes