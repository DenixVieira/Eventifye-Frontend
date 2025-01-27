import '../Styles/eventoscriados.css'
import { useState } from 'react'
import buttonMore from '../../../../assets/buttonMore.svg'
import { LinkButton } from '../../Layout/LinkButton'

export const EventosCriados = ({ name, id, inicio, fim, hora, desc }) => {
  const [showForm, setShowForm] = useState(true)
  const toggleCadaster = () => {
    setShowForm(!showForm)
  }
  return (
    <div className='container_evento' id={id}>
      <div className='event_description'>
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
      <div>
        {showForm ? (
          <button onClick={toggleCadaster}>
            <img src={buttonMore} />
          </button>) :
          (
            <div className='infos_evento'>
              <p>Data Inicio: {inicio} </p>
              <p>Data Final: {fim}</p>
              <p>Horário Eventos: {hora}</p>
              <div className='buttons'>
                <button onClick={toggleCadaster}>Voltar</button>
                <LinkButton to={`/Eventos/${id}/Palestrantes`} text='Palestrantes'></LinkButton>
                <LinkButton to={`/Eventos/${id}/Participantes`} text='Participantes'></LinkButton>
                <button>Remover</button>
              </div>
            </div>
          )
        }

      </div> </div>
  )
}
