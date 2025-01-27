import '../Styles/home.css'

import { LinkButton } from '../../Layout/LinkButton'
import eventIcon from '../../../../assets/event.svg'
import speakerIcon from '../../../../assets/speaker.svg'

export const Home = () => {
  return (
    <section className='home_container'>
      <h1>Espaço administrador:</h1>
      <div className='options'><div><img src={eventIcon} alt="" />Criar Evento</div><LinkButton to='/CriarEvento' text='AVANÇAR'/></div>
      <div className='options'><div><img src={speakerIcon} alt="" />Gerenciar Eventos</div><LinkButton to='/GerenciarEventos' text='AVANÇAR'/></div>

    </section>
  )
}
