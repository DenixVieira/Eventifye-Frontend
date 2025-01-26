
import { EventosCadastrados } from '../../Serviços/User/EventosCadastrados'
import '../Styles/Eventos.css'

export const MeusEventos = () => {
  return (
    <div className='home_container'>
      <div>
        <h1>Meus Eventos</h1>
      </div>
        <EventosCadastrados id='hehehe' nome='guri' description='kkk' />
    </div>
  )
}
