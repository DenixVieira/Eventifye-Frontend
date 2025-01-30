import { api } from "../../../../lib/api";
import { useMutation, useQueryClient } from "react-query";

const postFunction = async ({
	values,
}: {
	values: { idPalestra: number };
}) => {
	return await api.delete(`/palestras/${values.idPalestra}`);
};

export function useDeletePalestra(eventoId) {
	const queryClient = useQueryClient();

	const mutate = useMutation({
		mutationFn: postFunction,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["evento-data", eventoId],
			});
		},
	});

	return mutate;
}
