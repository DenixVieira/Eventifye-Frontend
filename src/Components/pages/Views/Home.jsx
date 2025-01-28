import './Styles/home.css'

import { LinkButton } from '../Layout/LinkButton'
import eventIcon from './../../../assets/event.svg'
import speakerIcon from './../../../assets/speaker.svg'

export const Home = () => {
  let user = "participante"
  return (

    <section className='home_container'>
      {
        user == "participante" ?
          <>
            <h1>Espaço administrador:</h1>
            <div className='options'><div><img src={eventIcon} alt="" />Criar Evento</div><LinkButton to='/CriarEvento' text='AVANÇAR' /></div>
            <div className='options'><div><img src={speakerIcon} alt="" />Gerenciar Eventos</div><LinkButton to='/GerenciarEventos' text='AVANÇAR' /></div>
          </>
          :
          <>
            <h1>Espaço Participante:</h1>
            <div className='options'><div><img src={speakerIcon} alt="" />Eventos</div><LinkButton to='/Eventos' text='AVANÇAR' /></div>
            <div className='options'><div><img src={eventIcon} alt="" />Meus Eventos</div><LinkButton to='/MeusEventos' text='AVANÇAR' /></div>
          </>
      }


    </section>
  )
}
