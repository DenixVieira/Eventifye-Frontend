import { useRoutes } from "react-router-dom"

import { Home } from "../Views/Home"
import { Login } from "../Views/Login"
import { Inicio } from "../Views/Inicio"
import { PrivateRoute } from "./PrivateRoute"
import { GerenciarEventos } from "../Views/GerenciarEventos"

export const Routes = () => {
    const routes = [
        {
            path:"/",
            element: <Inicio/>
        },
        {
            path:"/Home",
            element: <PrivateRoute element={<Home/>}/>
        },
        {
            path:"/GerenciarEventos",
            element: <PrivateRoute element={<GerenciarEventos/>}/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]
    let router = useRoutes(routes)
    return router;
}
