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
                {
                    user == "participante" ?
                        (
                            <>
                                <h1 className="profile"> OLÁ meu nego <img src={Logo} alt="Logo" /></h1>
                                <ul className="list">
                                    <li className="item">
                                        <Link to='/home'><h3>Home</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/CriarEvento'><h3>Criar Evento</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/GerenciarEventos'><h3>Gerenciar Eventos</h3></Link>
                                    </li>
                                    <LinkButton text="Sair" />
                                </ul>
                            </>
                        ) :
                        (
                            <>
                                <h1 className="profile">Eventifye<img src={Logo} alt="Logo" /></h1>

                                <ul className="list">
                                    <li className="item">
                                        <Link to='/HomeUser'><h3>Home</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/Eventos'><h3>Eventos</h3></Link>
                                    </li>
                                    <li className="item">
                                        <Link to='/MeusEventos'><h3>Meus Eventos</h3></Link>
                                    </li>
                                    <LinkButton text="Sair" />
                                </ul>
                            </>
                        )
                }

            </Container>
        </nav>
    )
}
