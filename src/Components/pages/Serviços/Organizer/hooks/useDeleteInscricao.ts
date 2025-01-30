import { api } from "../../../../lib/api";
import { useMutation, useQueryClient } from "react-query";

const postFunction = async ({
	values,
}: {
	values: { idInscricao: number };
}) => {
	return await api.delete(`/inscricao/${values.idInscricao}`);
};

export function useDeleteInscricao() {
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
