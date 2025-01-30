import { toDate } from "date-fns";
import { api } from "../../../../lib/api";
import { formatDateRFC3339, toBase64 } from "../../../../lib/utils";
import { useMutation, useQueryClient } from "react-query";

type EventoRequest = {
	tituloEvento: string;
	descricaoEvento: string;
	dataInicioEvento: Date;
	dataFimEvento: Date;
	localEvento: string;
	iconeEvento: FileList;
	linkEvento: string;
};

const postFunction = async ({ values }: { values: EventoRequest }) => {
    const data = {
        ...values,
		linkEvento: "",
		// iconeEvento: await toBase64(values.iconeEvento[0]),
		iconeEvento: "",
		dataInicioEvento: formatDateRFC3339(toDate(values.dataInicioEvento)),
		dataFimEvento: formatDateRFC3339(toDate(values.dataFimEvento)),
	};
	
	return await api.post("/eventos", data);
};

export function useEventosMutate() {
	const queryClient = useQueryClient();

	const mutate = useMutation({
		mutationFn: postFunction,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["all-eventos-data"],
			});
		},
		onError: () => {},
	});

	return mutate;
}
