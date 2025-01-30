import { format, toDate } from "date-fns";
import "../Styles/cadastroseventos.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EventosCadastrados = ({ evento }) => {
	const navigate = useNavigate();
	return (
		<div className='container_cadastros' id={evento.idEvento}>
			<div
				style={{
					display: "flex",
					alignContent: "center",
					gap: "5px",
				}}
			>
				<h1>{evento.nomeEvento}</h1>
				<p>{evento.descricaoEvento}</p>
				<p>
					{format(
						toDate(evento.dataInicioEvento),
						"dd/MM/yyyy"
					).concat(
						" - ",
						format(toDate(evento.dataFimEvento), "dd/MM/yyyy")
					)}
				</p>
			</div>
			<div>
				<button
					onClick={() =>
						navigate(`/eventos/${evento.idEvento}/palestras`)
					}
				>
					Ver palestras
				</button>
			</div>
		</div>
	);
};
