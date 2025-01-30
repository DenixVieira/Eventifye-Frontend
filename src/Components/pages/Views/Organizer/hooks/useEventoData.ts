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
	palestras: {
		idPalestra: number;
		nomePalestra: string;
		horarioPalestra: string;
		palestrante: {
			idPalestrante: number;
			nomePalestrante: string;
			areaExpertisePalestrante: string;
		};
	}[];
};

const fetchData = async (idEvento: number): Promise<EventoResponse> => {
	console.log(idEvento);

	return (await api.get(`/eventos/${idEvento}`)).data;
};

export function useEventoData(idEvento: number) {
	const query = useQuery({
		queryKey: ["evento-data", idEvento],
		queryFn: () => fetchData(idEvento),
		refetchInterval: 5 * 1000 * 60,
		staleTime: 5 * 1000 * 60,
		onError: (erro) => {
			console.log(erro);
		},
	});
	return query;
}
