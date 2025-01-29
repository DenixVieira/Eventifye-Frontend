import '../Styles/eventoscriados.css'
import { useState } from 'react'
import buttonMore from '../../../../assets/buttonMore.svg'
import { LinkButton } from '../../Layout/LinkButton'

export const EventosCriados = ({ name, id, inicio, fim, hora, desc }) => {
  const [showForm, setShowForm] = useState(false)
  const toggleCadaster = () => {
    setShowForm(!showForm)
  }
  return (
    <div className='container_evento' id={id}>
      <div className='event_description'>
        <h1>{name}</h1>
        <p className={showForm?'show_description':'dont_show_description'} >{desc}</p>
      </div>
      <div>
        {showForm ?

          (
            <div className='infos_evento'>
              <p>Data Inicio: {inicio} </p>
              <p>Data Final: {fim}</p>
              <p>Horário Eventos: {hora}</p>
              <div className='buttons'>
                <button onClick={toggleCadaster}>Voltar</button>
                <LinkButton to={`/Eventos/${id}/Palestrantes`} text='Palestras'></LinkButton>
                <LinkButton to={`/Eventos/${id}/Participantes`} text='Participantes'></LinkButton>
                <button onClick={toggleCadaster}>Remover</button>
              </div>
            </div>
          )
          :
          (<button onClick={toggleCadaster}>
            <img src={buttonMore} />
          </button>)
        }

      </div> </div>
  )
}
