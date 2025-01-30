import { useQuery } from "react-query";
import { api } from "../../../../lib/api";

type InscricoesEventosResponse = {
	idInscricao: number;
	usuarioId: string;
	evento: {
		idEvento: number;
		nomeEvento: string;
		dataInicioEvento: Date;
		dataFimEvento: Date;
		localEvento: string;
		descricaoEvento: string;
		idUsuario: string;
	};
	statusInscricao: string;
	dataInscricao: Date;
};

const fetchData = async (eventoId): Promise<InscricoesEventosResponse[]> => {
	return (await api.get(`/inscricao/evento/${eventoId}`)).data;
};

export function useAllInscricoesEventosData(eventoId: number) {
	const query = useQuery({
		queryKey: ["all-inscricoes-eventos-data", eventoId],
		queryFn: () => fetchData(eventoId),
		refetchInterval: 5 * 1000 * 60,
		staleTime: 5 * 1000 * 60,
	});
	return query;
}
