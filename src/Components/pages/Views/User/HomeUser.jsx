import { LinkButton } from '../../Layout/LinkButton'
import '../Styles/home.css'

import eventIcon from '../../../../assets/event.svg'
import speakerIcon from '../../../../assets/speaker.svg'

export const HomeUser = () => {
  return (
    <section className='home_container'>
      <h1>Espaço Participante:</h1>
      <div className='options'><div><img src={speakerIcon} alt="" />Eventos</div><LinkButton to='/Eventos' text='AVANÇAR'/></div>
      <div className='options'><div><img src={eventIcon} alt="" />Meus Eventos</div><LinkButton to='/MeusEventos' text='AVANÇAR'/></div>
    </section>
  )
}
