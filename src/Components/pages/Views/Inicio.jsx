import "./Styles/inicio.css";
import Logo from "../../../assets/logo.svg";
import { LinkButton } from "../Layout/LinkButton";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";

export const Inicio = () => {
	const { keycloak } = useKeycloak();
	const navigate = useNavigate();

	useEffect(() => {
		if (keycloak.authenticated) {
			navigate("/home");
		}
	}, [keycloak.authenticated, navigate]);

	return (
		<div className='inicio_container'>
			<div className='cabecalho'>
				<h1>Eventifye</h1>
				<img src={Logo} alt=""/>
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
							onClick={() =>
								keycloak.login({
									redirectUri: "http://localhost:5173/home",
								})
							}
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
				<div className='images'>
					<img src='Slides Box.svg' alt='Inicio' style={{width: "100%"}} />
				</div>
			</div>
		</div>
	);
};
