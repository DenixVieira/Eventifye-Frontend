import "../Styles/eventos.css";
import { useState } from "react";
import { normalizeText } from "../../../lib/utils";
import { CadastarEvento } from "../../Serviços/User/CadastrarEvento";
import { useAllEventosData } from "./hooks/useAllEventosData";
import { Loader } from "../../Layout/Loader";

export const Eventos = () => {
	const { data, isLoading, isError } = useAllEventosData();
	const [search, setSearch] = useState("");

	const filteredItems = data?.filter((item) => {
		const normalizedItem = normalizeText(item.tituloEvento);
		const normalizedSearchInput = normalizeText(search);

		return !search || normalizedItem.includes(normalizedSearchInput);
	}) ?? [];

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
				</div>
			</div>
			<div className='event_list'>
				{isLoading && <Loader/>}
				{!isLoading &&
					filteredItems.map((event) => (
						<CadastarEvento
							icon={event.iconeEvento}
							key={event.id}
							inicio={event.dataInicioEvento}
							desc={event.descricaoEvento}
							id={event.id}
							name={event.tituloEvento}
							fim={event.dataFimEvento}
						/>
					))}
			</div>
		</div>
	);
};
