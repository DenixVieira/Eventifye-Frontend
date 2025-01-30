import { api } from "../../../../lib/api";
import { useMutation, useQueryClient } from "react-query";

type InscricaoRequest = {
	eventoId: string;
	userId: string;
};

const postFunction = async ({ values }: { values: InscricaoRequest }) => {
	return await api.post(
		`/inscricao/evento/${values.eventoId}/usuario/${values.userId}`
	);
};

export function useInscricaoMutate() {
	const queryClient = useQueryClient();

	const mutate = useMutation({
		mutationFn: postFunction,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["all-inscricoes-data"],
			});
		},
	});

	return mutate;
}
