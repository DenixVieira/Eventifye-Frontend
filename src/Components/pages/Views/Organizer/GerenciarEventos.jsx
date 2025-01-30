import { LinkButton } from "../../Layout/LinkButton";
import { EventosCriados } from "../../Serviços/Organizer/EventosCriados";
import { Loader } from "../../Layout/Loader";
import { normalizeText } from "../../../lib/utils";
import "../Styles/eventos.css";

import { useState } from "react";
import { useUserEventosData } from "./hooks/useUserEventosData";
import { useKeycloak } from "@react-keycloak/web";

export const GerenciarEventos = () => {
	const { keycloak } = useKeycloak();
	const { data, isLoading, isError } = useUserEventosData(keycloak.subject);
	const [search, setSearch] = useState("");

	const filteredItems =
		data?.filter((item) => {
      console.log(item);
      
			const normalizedItem = normalizeText(item.nomeEvento);
			const normalizedSearchInput = normalizeText(search);

			return !search || normalizedItem.includes(normalizedSearchInput);
		}) ?? [];

	if (isError) {
		console.log("erro");
	}

	return (
		<div className='container'>
			<div className='title'>
				<h1>Eventos Criados</h1>{" "}
				<div className='search'>
					<input
						type='text'
						placeholder='Buscar Eventos'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<LinkButton to='/criar-evento' text='Criar novo evento?' />
			</div>
			<div className='event_list'>
				{isLoading && <Loader />}
				{!isLoading &&
					filteredItems.map((event) => (
						<EventosCriados
							icon={event.iconeEvento}
							key={event.idEvento}
							inicio={event.dataInicioEvento}
							desc={event.descricaoEvento}
							id={event.idEvento}
							name={event.nomeEvento}
							fim={event.dataFimEvento}
						/>
					))}
			</div>
		</div>
	);
};
