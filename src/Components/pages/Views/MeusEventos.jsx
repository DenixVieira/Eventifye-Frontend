import { LinkButton } from '../Layout/LinkButton'
import { CadastrosEventos } from '../Serviços/CadastrosEventos'
import './certificados.css'

export const MeusEventos = () => {
  return (
    <div className='home_container'>
      <div>
        <h1>Meus Eventos</h1>
      </div>
        <CadastrosEventos/>
    </div>
  )
}
