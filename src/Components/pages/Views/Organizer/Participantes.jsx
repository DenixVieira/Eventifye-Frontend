import TableParticipante from '../../Serviços/Organizer/TableParticipante'
import { Event_API } from "../../../Hooks/Event_API"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

export const Participantes = () => {

  const { id } = useParams();
  const [participantes, setParticipantes] = useState([])

  useEffect(() => {
    const fetchClient = async () => {
      const events = await Event_API.getEvents();
      const eventInfo = events.find(client => client.id == id);
      setParticipantes(eventInfo.Participantes);
    };
    fetchClient();
  }, [id]);

  return (
    <section className='home_container'>
      <div className='title'>
        <h1>Participantes inscritos:</h1> <button>Exportar Participantes</button>
      </div>
      {participantes.length > 0 ? <TableParticipante Participantes={participantes} /> : <p>sem dados</p>
      }
    </section>
  )
}
