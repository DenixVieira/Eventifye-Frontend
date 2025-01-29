import "./Styles/home.css";

import { LinkButton } from "../Layout/LinkButton";
import eventIcon from "./../../../assets/event.svg";
import speakerIcon from "./../../../assets/speaker.svg";
import { api } from "../../lib/api";
import { useAuth } from "react-oidc-context";

export const Home = () => {
	const { user } = useAuth();
	if (!Object.keys(api.defaults.headers).includes("Authorization")) {
		api.defaults.headers.Authorization = `Bearer ${user.id_token}`;
	}
	return (
		<section className='home_container'>
			<h1>Espaço administrador:</h1>
			<div className='options'>
				<div>
					<img src={speakerIcon} alt='' />
					Eventos
				</div>
				<LinkButton to='/eventos' text='AVANÇAR' />
			</div>
			<div className='options'>
				<div>
					<img src={eventIcon} alt='' />
					Eventos Inscritos
				</div>
				<LinkButton to='/meus-eventos' text='AVANÇAR' />
			</div>
			<div className='options'>
				<div>
					<img src={eventIcon} alt='' />
					Criar Evento
				</div>
				<LinkButton to='/criar-evento' text='AVANÇAR' />
			</div>
			<div className='options'>
				<div>
					<img src={speakerIcon} alt='' />
					Gerenciar Eventos
				</div>
				<LinkButton to='/gerenciar-eventos' text='AVANÇAR' />
			</div>
		</section>
	);
};
