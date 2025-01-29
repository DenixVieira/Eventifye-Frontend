import { useQuery } from "react-query";
import { api } from "../../../../lib/api";

type EventoResponse = {
	id: number;
	tituloEvento: string;
	descricaoEvento: string;
	dataInicioEvento: Date;
	dataFimEvento: Date;
	localEvento: string;
	iconeEvento: string;
	linkEvento: string;
	palestras: any[];
};

const fetchData = async (): Promise<EventoResponse[]> => {
	return (await api.get("/eventos")).data
};

export function useAllEventosData() {
	const query = useQuery({
		queryKey: ["all-eventos-data"],
		queryFn: () => fetchData(),
		refetchInterval: 5 * 1000 * 60,
		staleTime: 5 * 1000 * 60,
		onError: (erro) => {
			console.log(erro);
			
		}
	});
	return query;
}
