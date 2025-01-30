import TableParticipante from "../../Serviços/Organizer/TableParticipante";
import { useParams } from "react-router-dom";
import { useUserAllInscricoes } from "../../Serviços/User/hooks/useUserAllInscricoes";
import { Loader } from "../../Layout/Loader";
import { useAllInscricoesEventosData } from "./hooks/useAllInscricoesEvento";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export const Participantes = () => {
	const { id } = useParams();
	const { data, isLoading, isError, error } = useAllInscricoesEventosData(id);
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "",
	});

	useEffect(() => {
		if (isError) {
			setSnackbar({
				message: error.response.data,
				severity: "error",
				open: true,
			});
		}
	}, [isError]);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbar({ message: "", open: false, severity: "" });
	};

	return (
		<section className='home_container'>
			<div className='title'>
				<h1>Participantes inscritos:</h1>
			</div>
			{isLoading && (
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
					}}
				>
					<Loader />
				</div>
			)}
			{!isLoading && data && (
				<TableParticipante participantes={data} eventoId={id} />
			)}
			<Snackbar
				open={snackbar.open}
				onClose={handleClose}
				autoHideDuration={5000}
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
		</section>
	);
};
