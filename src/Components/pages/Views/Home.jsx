import './home.css'

import { LinkButton } from '../Layout/LinkButton'
import eventIcon from './../../../assets/event.svg'
import participantIcon from './../../../assets/participant.svg'
import speakerIcon from './../../../assets/speaker.svg'

export const Home = () => {
  return (
    <section className='home_container'>
      <h1>Espaço administrador:</h1>
      <div className='options'><div><img src={speakerIcon} alt="" />Gerenciar Participantes</div><LinkButton to='/Participantes' text='AVANÇAR'/></div>
      <div className='options'><div><img src={participantIcon} alt="" />Gerenciar Palestrantes</div><LinkButton to='/GerenciarEventos' text='AVANÇAR'/></div>
      <div className='options'><div><img src={eventIcon} alt="" />Gerenciar Eventos</div><LinkButton to='/GerenciarEventos' text='AVANÇAR'/></div>

    </section>
  )
}
