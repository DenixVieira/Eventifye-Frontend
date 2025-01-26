import TableParticipante from '../../Serviços/Organizer/TableParticipante'
import { Event_API } from "../../../Hooks/Event_API"
import { useState, useEffect } from "react"

export const Participantes = () => {

  const [participantes, setParticipantes] = useState([])

  useEffect(() => {
    Event_API.getParticipantes().then((data) => {

      setParticipantes(data);
    });
  }, []);

  return (
    <section className='home_container'>
      <div className='title'>
        <h1>Participantes inscritos:</h1> <button>Exportar Participantes</button>
      </div>
      { participantes.length > 0? <TableParticipante Participantes={participantes}/>: <p>sem dados</p>
      }
    </section>
  )
}
