import { api } from "../../../../lib/api";
import { useMutation, useQueryClient } from "react-query";

const postFunction = async ({
	values,
}: {
	values: { idInscricao: number; novoStatus: string };
}) => {
	return await api.put(`/inscricao/${values.idInscricao}/status/${values.novoStatus}`);
};

export function useConfirmarPresenca() {
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
