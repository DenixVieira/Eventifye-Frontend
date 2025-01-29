import "./Styles/inicio.css";
import Logo from "../../../assets/logo.svg";
import { LinkButton } from "../Layout/LinkButton";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export const Inicio = () => {
	const { signinRedirect, isAuthenticated } = useAuth();
	const navigate = useNavigate();
	if (isAuthenticated) {
		navigate("/home");
	}
	return (
		<div className='inicio_container'>
			<div className='cabecalho'>
				<h1>Eventifye</h1>
				<img src={Logo} />
			</div>
			<div className='body'>
				<div className='infos'>
					<div className='content'>
						<h2>
							Acompanhe sua <span>Programação</span>, Inscreva-se
							em <span>novos eventos</span> e baixe{" "}
							<span>certificados</span> com facilidade
						</h2>
						<p>
							Faça login e tenha acesso à sua lista de eventos,
							lembrentes e certificados.
						</p>
						<LinkButton
							text='Login Participante'
							onClick={signinRedirect}
						/>
					</div>
					<div className='content'>
						<h2>
							<span>Planeje</span> suas palestras,{" "}
							<span>Monitore</span> sua programação e{" "}
							<span>aproveite</span> ao máximo sua participação.
						</h2>
						<p>
							Faça login para acompanhar suas palestras, atualizar
							informações e conferir sua agenda.
						</p>
						<LinkButton
							to='/criar-evento'
							text='Crie um evento'
							customClass='btn_custom'
						/>
					</div>
				</div>
				<div className='images'>kkkkk</div>
			</div>
		</div>
	);
};
