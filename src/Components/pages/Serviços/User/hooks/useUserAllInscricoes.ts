import { useQuery } from "react-query";
import { api } from "../../../../lib/api";

type InscricoesResponse = {
	idInscricao: number;
	participante: {
		id: string;
		email: string;
		nome: string;
	};
	statusInscricao: string;
	dataInscricao: Date;
};

const fetchData = async ({ usuarioId }): Promise<InscricoesResponse[]> => {
	return (await api.get(`/inscricao/usuario/${usuarioId}`)).data;
};

export function useUserAllInscricoes(usuarioId: string) {
	const query = useQuery({
		queryKey: ["all-inscricoes-data", usuarioId],
		queryFn: () => fetchData({ usuarioId }),
		refetchInterval: 5 * 1000 * 60,
		staleTime: 5 * 1000 * 60,
		onError: (erro) => {
			console.log(erro);
		},
	});
	return query;
}
