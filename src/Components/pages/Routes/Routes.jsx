import { useRoutes } from "react-router-dom"

import { Home } from "../Views/Home"
import { Login } from "../Views/Login"
import { Inicio } from "../Views/Inicio"
import { PrivateRoute } from "./PrivateRoute"
import { GerenciarEventos } from "../Views/GerenciarEventos"
import { Eventos } from "../Views/Eventos"
import { HomeUser } from "../Views/HomeUser"
import { MeusEventos } from "../Views/MeusEventos"
import { Certificados } from "../Views/Certificados"
import { Participantes } from "../Views/Participantes"

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
            path:"/Participantes",
            element: <PrivateRoute element={<Participantes/>}/>
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
            path:"/MeusEventos",
            element: <PrivateRoute element={<MeusEventos/>}/>
        },
        {
            path:"/HomeUser",
            element: <PrivateRoute element={<HomeUser/>}/>
        },
        {
            path:"/Certificados",
            element: <PrivateRoute element={<Certificados/>}/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]
    let router = useRoutes(routes)
    return router;
}
