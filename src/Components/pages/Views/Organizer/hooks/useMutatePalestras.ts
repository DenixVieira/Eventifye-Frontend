import { api } from "../../../../lib/api";
import { useMutation, useQueryClient } from "react-query";

type PalestrasRequest = {
	idEvento: number;
	nome: string;
	horario: any;
	nomePalestrante: string;
	expertisePalestrante: string;
};

const postFunction = async ({ values }: { values: PalestrasRequest }) => {
	const data = {
		...values,
		horario: values.horario.concat(":00"),
	};
	console.log(data);

	return await api.post("/palestras", data);
};

export function usePalestrasMutate() {
	const mutate = useMutation({
		mutationFn: postFunction,
		onSuccess: () => {},
		onError: () => {},
	});

	return mutate;
}
