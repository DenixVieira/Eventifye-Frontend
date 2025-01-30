import { Navigate, useRoutes } from "react-router-dom";

import { Home } from "../Views/Home";
import { Inicio } from "../Views/Inicio";
import { PrivateRoute } from "./PrivateRoute";
import { GerenciarEventos } from "../Views/Organizer/GerenciarEventos";
import { Eventos } from "../Views/User/Eventos";
import { MeusEventos } from "../Views/User/MeusEventos";
import { Participantes } from "../Views/Organizer/Participantes";
import { CriarEvento } from "../Views/Organizer/CriarEvento";
import { Palestras } from "../Views/Organizer/Palestras";

export const Routes = () => {
	const routes = [
		{
			path: "/",
			element: <Inicio />,
		},
		{
			path: "/home",
			element: <PrivateRoute element={<Home />} />,
		},
		{
			path: "/eventos/:id/participantes",
			element: <PrivateRoute element={<Participantes />} />,
		},
		{
			path: "/eventos/:id/palestras",
			element: <PrivateRoute element={<Palestras />} />,
		},
		{
			path: "/gerenciar-eventos",
			element: <PrivateRoute element={<GerenciarEventos />} />,
		},
		{
			path: "/eventos",
			element: <PrivateRoute element={<Eventos />} />,
		},
		{
			path: "/minhas-inscricoes",
			element: <PrivateRoute element={<MeusEventos />} />,
		},
		{
			path: "/criar-evento",
			element: <PrivateRoute element={<CriarEvento />} />,
		},
		{
			path: "*",
			element: <Navigate to='/' replace />,
		},
	];
	let router = useRoutes(routes);
	return router;
};
