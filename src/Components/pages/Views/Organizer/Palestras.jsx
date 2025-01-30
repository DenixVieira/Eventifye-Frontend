import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import TablePalestrantes from "../../Serviços/Organizer/TablePalestrantes"
import { normalizeText } from "../../../lib/utils";
import { usePalestrasMutate } from "./hooks/useMutatePalestras"

export const Palestras = () => {
    const { id } = useParams();
    const [palestrantes, setPalestrantes] = useState([])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const { mutate } = usePalestrasMutate();

    // const { data, isLoading } = useEventoData();

    const onSubmit = (data) => {
        data = {...data, idEvento: id}
        mutate(
            { values: data},
            {
                onSuccess: ({ data }) => {
                    console.log('sucesso')
                },
                onError: (erro) => {
                    console.log(erro);
                },
            }
        );
    };

    return (
        <div className='home_container'>
            <div className='title'>
                <h1>"Nome Evento":</h1>
            </div>
            <div className="container_adicionar">
                <div className="area_form">
                    {palestrantes.length > 0 ? <TablePalestrantes Palestrantes={palestrantes} /> : <p>sem dados</p>
                    }
                </div>
                <div className="area_image">
                    <div className="div_container" >
                        <h2>Cadastrar Palestra:</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label>Horário do Evento:</label>
                            <input type="time" style={{ padding: '0.5em 3em', width: '50%', marginLeft: '25%', cursor: 'pointer' }} {...register("horario", { required: true })} />
                            {errors.horario && <span>Campo Obrigatório!</span>}

                            <input placeholder="Nome da Palestra" {...register("nome", { required: true })} />
                            {errors.nome && <span>Campo Obrigatório!</span>}

                            <input placeholder="Nome do Palestrante" {...register("nomePalestrante", { required: true })} />
                            {errors.nomePalestrante && <span>Campo Obrigatório!</span>}

                            <input placeholder="Expertise do Palestrante" {...register("expertisePalestrante", { required: true })} />
                            {errors.expertisePalestrante && <span>Campo Obrigatório!</span>}
                            {/* errors will return when field validation fails  */}
                            {(errors.horario || errors.nome || errors.nomePalestrante) && <span>Preencha todos os campos!</span>}

                            <input type="submit" className="button_form" value='Cadastrar' />
                        </form>

                    </div>
                    <div className="div_container">
                        <h2>Remover Palestra</h2>
                    </div>
                </div>
            </div>
            <div className="container_adicionar">
            </div>

        </div>
    )
}
