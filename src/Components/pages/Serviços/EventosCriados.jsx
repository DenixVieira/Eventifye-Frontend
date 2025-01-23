import './eventoscriados.css'

import buttonMore from '../../../assets/buttonMore.svg'


export const EventosCriados = ({name, id}) => {

  return (
    <div className='container_evento' id={id}><h1>{name}</h1><button><img src={buttonMore}/></button></div>
  )
}
