import "./navbar.css"
import { Container } from "./Container"
import { Link } from "react-router-dom"
import { LinkButton } from "./LinkButton"
import Logo from "./../../../assets/logo.svg"

export const Navbar = () => {
    let user = "participante"
    return (
        <nav className="navbar">
            <Container>

                                <h1 className="profile"> Olá [Nome]! <img src={Logo} alt="Logo" /></h1>
                                <ul className="list">
                                    <li className="item">
                                        <Link to='/home'><h3>Home</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/eventos'><h3>Eventos</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/meus-eventos'><h3>Eventos Inscritos</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/criar-evento'><h3>Criar Evento</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/gerenciar-eventos'><h3>Gerenciar Eventos</h3></Link>
                                    </li>
                                    <LinkButton text="Sair" />
                                </ul>


            </Container>
        </nav>
    )
}
