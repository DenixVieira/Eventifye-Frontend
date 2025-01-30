import "../Styles/eventoscriados.css";
import { useState } from "react";
import buttonMore from "../../../../assets/buttonMore.svg";
import { useInscricaoMutate } from "./hooks/useMutateInscricao";
import { useKeycloak } from "@react-keycloak/web";
import { Alert, Snackbar } from "@mui/material";

export const CadastarEvento = ({ name, id, inicio, fim, desc, icon }) => {
	const { mutate } = useInscricaoMutate();
	const { keycloak } = useKeycloak();
	const [showForm, setShowForm] = useState(false);
	const toggleCadaster = () => {
		setShowForm(!showForm);
	};

	const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "" });

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbar({ message: "", open: false, severity: "" });
	};

	const inscrever = () => {
		mutate(
			{
				values: { eventoId: id, userId: keycloak.subject },
			},
			{
				onSuccess: () => {
					setSnackbar({
						open: true,
						message: "Inscrição realizada com sucesso!",
						severity: "sucess"
					});
				},
				onError: (response) => {
					setSnackbar({
						open: true,
						message: response.response.data,
						severity: "error"
					});
				},
			}
		);
	};

	return (
		<div className='container_evento' id={id}>
			<div className='event_description'>
				<h1>{name}</h1>
				<p
					className={
						showForm ? "show_description" : "dont_show_description"
					}
				>
					{desc}
				</p>
			</div>
			<div>
				{showForm ? (
					<div className='infos_evento'>
						<p>
							Data Inicio:{" "}
							{inicio
								.toString()
								.slice(0, 10)
								.split("-")
								.reverse()
								.join("/")}
						</p>
						<p>
							Data Final:{" "}
							{fim
								.toString()
								.slice(0, 10)
								.split("-")
								.reverse()
								.join("/")}
						</p>
						<p>
							Horário Eventos: {inicio.toString().slice(11, 16)} à{" "}
							{fim.toString().slice(11, 16)}
						</p>
						<div className='buttons'>
							<button onClick={toggleCadaster}>Voltar</button>
							<button onClick={inscrever}>Se inscrever</button>
						</div>
					</div>
				) : (
					<button onClick={toggleCadaster}>
						<img src={buttonMore} />
					</button>
				)}
				<Snackbar
					open={snackbar.open}
					onClose={handleClose}
					autoHideDuration={3000}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
				>
					<Alert
						onClose={handleClose}
						severity={snackbar.severity}
						variant='filled'
						sx={{ width: "100%" }}
					>
						{snackbar.message}
					</Alert>
				</Snackbar>
			</div>
		</div>
	);
};
