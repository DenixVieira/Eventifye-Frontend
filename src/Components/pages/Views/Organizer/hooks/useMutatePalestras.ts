import { api } from "../../../../lib/api";
import { useMutation, useQueryClient } from "react-query";

type PalestrasRequest = {
    idEvento: number;
	nome: string;
	horario: Date;
	nomePalestrante: string;
	expertisePalestrante: string;

};

const postFunction = async ({ values }: { values: PalestrasRequest}) => {
    
    const data = {
        ...values
    };
    console.log(data)
    return await api.post("/palestras", data);
};

export function usePalestrasMutate() {
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