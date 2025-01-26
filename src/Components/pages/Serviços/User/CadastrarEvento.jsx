import '../Styles/eventoscriados.css'
import { useState } from 'react'
import buttonMore from '../../../../assets/buttonMore.svg'


export const CadastarEvento = ({ name, id }) => {
  const [showForm, setShowForm] = useState(true)
  const toggleCadaster = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='container_evento' id={id}><h1>{name}</h1>
      <div>
        {showForm ? (
          <button onClick={toggleCadaster}>
            <img src={buttonMore} />
          </button>) :
          (
            <div className='infos_evento'>
              <p>Data Inicio: </p>
              <p>Data Final: </p>
              <p>Horário Eventos: </p>
              <div className='buttons'>
                <button onClick={toggleCadaster}>Voltar</button>
                <button>Se inscrever</button>
              </div>
            </div>
          )
        }

      </div> </div>
  )
}
