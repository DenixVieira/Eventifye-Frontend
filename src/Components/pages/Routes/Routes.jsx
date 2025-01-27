import { useRoutes } from "react-router-dom"

import { Home } from "../Views/Organizer/Home"
import { Login } from "../Views/Login"
import { Inicio } from "../Views/Inicio"
import { PrivateRoute } from "./PrivateRoute"
import { GerenciarEventos } from "../Views/Organizer/GerenciarEventos"
import { Eventos } from "../Views/User/Eventos"
import { HomeUser } from "../Views/User/HomeUser"
import { MeusEventos } from "../Views/User/MeusEventos"
import { Participantes } from "../Views/Organizer/Participantes"
import { CriarEvento } from "../Views/Organizer/CriarEvento"
import { Palestrantes } from "../Views/Organizer/Palestrantes"

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
            path:"/Eventos/:id/Participantes",
            element: <PrivateRoute element={<Participantes/>}/>
        },
        {
            path:"/Eventos/:id/Palestrantes",
            element: <PrivateRoute element={<Palestrantes/>}/>
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
            path:"/CriarEvento",
            element: <PrivateRoute element={<CriarEvento/>}/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]
    let router = useRoutes(routes)
    return router;
}
