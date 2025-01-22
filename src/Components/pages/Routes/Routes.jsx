import { useRoutes } from "react-router-dom"

import { Home } from "../Views/Home"
import { Login } from "../Views/Login"
import { Inicio } from "../Views/Inicio"
import { PrivateRoute } from "./PrivateRoute"
import { GerenciarEventos } from "../Views/GerenciarEventos"
import { Eventos } from "../Views/Eventos"
import { HomeUser } from "../Views/HomeUser"

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
            path:"/Eventos",
            element: <PrivateRoute element={<Eventos/>}/>
        },
        {
            path:"/HomeUser",
            element: <PrivateRoute element={<HomeUser/>}/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]
    let router = useRoutes(routes)
    return router;
}
