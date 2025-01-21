import "./navbar.css"
import { Container } from "./Container"
import { Link } from "react-router-dom"
import { Logo } from "./icon"
import { LinkButton } from "./LinkButton"


export const Navbar = () => {
    let user = "participante"
    return (
        <nav className="navbar">
            <Container>
                {
                    user == "participante"?
                    (
                        <>
                        <h1 className="profile"> OLÁ meu nego<Logo/></h1>
                        <ul className="list">
                            <li className="item">
                                <Link to='/home'><h3>Home</h3></Link>
                            </li>
                            <li className="item">
                                <Link><h3>Palestrantes</h3></Link>
                            </li>
                            <li className="item">
                                <Link><h3>Participantes</h3></Link>
                            </li>
                            <li className="item">
                                <Link to='/GerenciarEventos'><h3>Gerenciar Eventos</h3></Link>
                            </li>
                            <Link><button><h3>Sair</h3></button></Link>
                        </ul>
                        </>
                    ):
                    (
                        <>
                        <h1 className="profile">Eventifye<Logo/></h1>
                        
                        <ul className="list">
                            <li className="item">
                                <Link><h3>Eventos</h3></Link>
                            </li>
                            <li className="item">
                                <Link><h3>Certificados</h3></Link>
                            </li>
                            <li className="item">
                                <Link><h3>Meus Eventos</h3></Link>
                            </li>
                            <LinkButton text="Sair"/>
                        </ul>
                        </>
                    )
                }
               
            </Container>
        </nav>
    )
}
