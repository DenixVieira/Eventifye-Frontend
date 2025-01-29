import "../Styles/eventos.css";
import { useState } from "react";
import { normalizeText } from "../../../lib/utils";
import { CadastarEvento } from "../../Serviços/User/CadastrarEvento";
import { useAllEventosData } from "./hooks/useAllEventosData";

export const Eventos = () => {
	const { data, isLoading, isError } = useAllEventosData();
	const [search, setSearch] = useState("");

	const filteredItems = data?.filter((item) => {
		const normalizedItem = normalizeText(item.tituloEvento);
		const normalizedSearchInput = normalizeText(search);

		return !search || normalizedItem.includes(normalizedSearchInput);
	});
	// const SearchEvent = () => {};

	if (isError) {
		console.log("erro");
	}

	return (
		<div className='container'>
			<div className='title'>
				<h1>Eventos</h1>
				<div className='search'>
					<input
						type='text'
						placeholder='Buscar Eventos'
						onChange={(e) => setSearch(e.target.value)}
					/>
					{/* <button onClick={SearchEvent}>
						<svg
							width='22'
							height='22'
							viewBox='0 0 22 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19.25 19.25L15.2625 15.2625M17.4167 10.0833C17.4167 14.1334 14.1334 17.4167 10.0833 17.4167C6.03325 17.4167 2.75 14.1334 2.75 10.0833C2.75 6.03325 6.03325 2.75 10.0833 2.75C14.1334 2.75 17.4167 6.03325 17.4167 10.0833Z'
								stroke='#1E1E1E'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button> */}
				</div>
			</div>
			<div className='event_list'>
				{isLoading && "spinner"}
				{!isLoading &&
					filteredItems.map((event) => (
						<CadastarEvento
							key={event.id}
							inicio={event.dataInicioEvento}
							desc={event.desc}
							id={event.id}
							name={event.name}
							fim={event.dataFimEvento}
							hora={event.hora}
						/>
					))}
			</div>
		</div>
	);
};
