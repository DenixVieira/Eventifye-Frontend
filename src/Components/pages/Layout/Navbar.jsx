import "./navbar.css";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";
import Logo from "./../../../assets/logo.svg";
import { useKeycloak } from "@react-keycloak/web";

export const Navbar = () => {
	const { keycloak } = useKeycloak();
	console.log(keycloak);
	
	return (
		<nav className='navbar'>
			<Container>
				<h1 className='profile'>
					{" "}
					Olá {keycloak.idTokenParsed.given_name}!
					<img src={Logo} alt='Logo' />
				</h1>
				<ul className='list'>
					<li className='item'>
						<Link to='/home'>
							<h3>Home</h3>
						</Link>
					</li>
					<li className='item'>
						<Link to='/eventos'>
							<h3>Eventos</h3>
						</Link>
					</li>
					<li className='item'>
						<Link to='/minhas-inscricoes'>
							<h3>Minhas Inscrições</h3>
						</Link>
					</li>
					<li className='item'>
						<Link to='/criar-evento'>
							<h3>Criar Evento</h3>
						</Link>
					</li>
					<li className='item'>
						<Link to='/gerenciar-eventos'>
							<h3>Gerenciar Eventos</h3>
						</Link>
					</li>
					<LinkButton
						text='Sair'
						onClick={() => keycloak.logout({ redirectUri: "http://localhost:5173" })}
					/>
				</ul>
			</Container>
		</nav>
	);
};
