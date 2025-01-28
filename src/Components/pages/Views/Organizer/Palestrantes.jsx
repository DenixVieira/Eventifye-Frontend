import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"

import { Event_API } from "../../../Hooks/Event_API"
import TablePalestrantes from "../../Serviços/Organizer/TablePalestrantes"


export const Palestrantes = () => {
    const { id } = useParams();
    const [participantes, setParticipantes] = useState([])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    useEffect(() => {
        const fetchClient = async () => {
            const events = await Event_API.getEvents();
            console.log(events)
            const eventInfo = events.find(client => client.id == id);
            setParticipantes(eventInfo.Participantes);
        };
        fetchClient();
    }, [id]);

    return (
        <div className='home_container'>
            <div className='title'>
                <h1>"Nome Evento":</h1>
            </div>
            <div className="container_adicionar">
                <div className="area_form">
                    {participantes.length > 0 ? <TablePalestrantes Palestrantes={participantes} /> : <p>sem dados</p>
                    }
                </div>
                <div className="area_image">
                    <div className="div_container" >
                        <h2>Cadastrar Palestra:</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder="Digite o nome do palestrante a ser cadastrado:" {...register("nome", { required: true })} />
                            {errors.nome && <span>Campo Obrigatório!</span>}
                            <input placeholder="Digite o e-mail do palestrante a ser cadastrado:" {...register("email", { required: true })} />

                            <input placeholder="Digite a àrea do palestrante a ser cadastrado:" {...register("area", { required: true })} />
                            {errors.area && <span>Campo Obrigatório!</span>}
                            {/* errors will return when field validation fails  */}
                            {(errors.nome || errors.email || errors.area) && <span>Preencha todos os campos!</span>}

                            <input type="submit" className="button_form" value='Cadastrar'/>
                        </form>

                    </div>
                    <div className="div_container">
                        <h2>Remover Palestrante</h2>
                    </div>
                </div>
            </div>
            <div className="container_adicionar">
            </div>

        </div>
    )
}
