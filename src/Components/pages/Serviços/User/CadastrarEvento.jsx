import "../Styles/eventoscriados.css";
import { useState } from "react";
import buttonMore from "../../../../assets/buttonMore.svg";
import { format, toDate } from "date-fns";

export const CadastarEvento = ({ name, id, inicio, fim, desc, icon }) => {
	const [showForm, setShowForm] = useState(false);
	const toggleCadaster = () => {
		setShowForm(!showForm);
	};

	return (
		<div className='container_evento' id={id}>
			<div className='event_description'>
				<h1>{name}</h1>
				<p
					className={
						showForm ? "show_description" : "dont_show_description"
					}
				>
					{desc}
				</p>
			</div>
			<div>
				{showForm ? (
					<div className='infos_evento'>
						<p>
							Data Inicio: {inicio.toString().slice(0,10).split("-").reverse().join("/")}
						</p>
						<p>Data Final: {fim.toString().slice(0,10).split("-").reverse().join("/")}</p>
						<p>Horário Eventos: {inicio.toString().slice(11,16)} à {fim.toString().slice(11,16)}</p>
						<div className='buttons'>
							<button onClick={toggleCadaster}>Voltar</button>
							<button>Se inscrever</button>
						</div>
					</div>
				) : (
					<button onClick={toggleCadaster}>
						<img src={buttonMore} />
					</button>
				)}
			</div>{" "}
		</div>
	);
};
