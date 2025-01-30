import { useKeycloak } from "@react-keycloak/web";
import { EventosCadastrados } from "../../Serviços/User/EventosCadastrados";
import "../Styles/eventos.css";
import { Loader } from "../../Layout/Loader";
import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useUserAllInscricoes } from "../../Serviços/User/hooks/useUserAllInscricoes";

export const MeusEventos = () => {
	const { keycloak } = useKeycloak();
	const { data, isLoading, isError } = useUserAllInscricoes(keycloak.subject);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (isError) {
			setOpen(true);
		}
	}, [isError]);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	return (
		<div className='home_container'>
			<div>
				<h1>Minhas Inscrições</h1>
			</div>
			{isError && (
				<Snackbar
					open={open}
					onClose={handleClose}
					autoHideDuration={3000}
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				>
					<Alert
						onClose={handleClose}
						severity='error'
						variant='filled'
						sx={{ width: "100%" }}
					>
						Erro ao buscar eventos inscritos!
					</Alert>
				</Snackbar>
			)}
			{isLoading && (
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Loader />
				</div>
			)}
			{!isLoading &&
				data &&
				data.map((item) => {
					return (
						<EventosCadastrados
							key={item.idInscricao}
							evento={item.evento}
						/>
					);
				})}
		</div>
	);
};
