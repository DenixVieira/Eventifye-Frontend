import "./inicio.css"
import { LinkButton } from "../Layout/LinkButton"
import Logo from '../../../assets/logo.svg';

export const Inicio = () => {
  return (
    <div className="inicio_container">
        <div className="cabecalho">
            <h1>Eventifye</h1> <img src={Logo}/>
        </div>
        <div className='body'>
            <div className="infos">
                <div className="content">
                    <h2>Acompanhe sua <span>Programação</span>, Inscreva-se em <span>novos eventos</span> e baixe <span>certificados</span> com facilidade</h2>
                    <p>Faça login e tenha acesso à sua lista de eventos, lembrentes e certificados.</p>
                    <LinkButton text="Login Participante"/>
                </div>
                <div className="content">
                    <h2><span>Planeje</span> suas palestras, <span>Monitore</span> sua programação e <span>aproveite</span> ao máximo sua participação.</h2>
                    <p>Faça login para acompanhar suas palestras, atualizar informações e conferir sua agenda.</p>
                    <LinkButton text="Login Organizador" customClass="btn_custom"/>
                </div>
            </div>
            <div className="images">
                kkkkk
            </div>
        </div>
    </div>

  )
}
