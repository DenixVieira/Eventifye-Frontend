import { LinkButton } from '../Layout/LinkButton'
import './home.css'

export const Home = () => {
  return (
    <section className='home_container'>
      <h1>Espaço administrador:</h1>
      <div className='options'>Gerenciar Palestrantes <LinkButton to='/GerenciarEventos' text='AVANÇAR'/></div>
      <div className='options'>Gerenciar Participantes <LinkButton to='/GerenciarEventos' text='AVANÇAR'/></div>
      <div className='options'>Gerenciar Eventos <LinkButton to='/GerenciarEventos' text='AVANÇAR'/></div>

    </section>
  )
}
