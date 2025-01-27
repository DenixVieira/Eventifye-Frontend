import { Event_API } from "../../../Hooks/Event_API"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import TablePalestrantes from "../../Serviços/Organizer/TablePalestrantes"

export const Palestrantes = () => {
    const { id } = useParams();
    const [participantes, setParticipantes] = useState([])

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
                <h1>Palestrantes inscritos:</h1>
            </div>
            <div className="container_adicionar">
                <div className="area_form">
                    {participantes.length > 0 ? <TablePalestrantes Participantes={participantes} /> : <p>sem dados</p>
                }
                </div>
                <div className="area_image">
                    sdasd
                </div>
            </div>
            <div className="container_adicionar">
            </div>

        </div>
    )
}
