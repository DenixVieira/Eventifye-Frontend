import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import TablePalestrantes from "../../Serviços/Organizer/TablePalestrantes";
import { usePalestrasMutate } from "./hooks/useMutatePalestras";
import { useEventoData } from "./hooks/useEventoData";
import { useQueryClient } from "react-query";
import { useKeycloak } from "@react-keycloak/web";
import { Alert, Snackbar } from "@mui/material";
import { useDeletePalestra } from "./hooks/useDeletePalestra";
import { Loader } from "../../Layout/Loader";

export const Palestras = () => {
	const { keycloak } = useKeycloak();
	const queryClient = useQueryClient();
	const { id } = useParams();
	const { data, isLoading, isError } = useEventoData(id);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { mutate } = usePalestrasMutate();
	const { mutate: deletePalestra } = useDeletePalestra(id);

	const [snackbar, setSnackbar] = useState({
		open: false,
		message: "",
		severity: "",
	});

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbar({ message: "", open: false, severity: "" });
	};

	const onSubmit = (data) => {
		data = { ...data, idEvento: id };
		mutate(
			{ values: data },
			{
				onSuccess: () => {
					queryClient.invalidateQueries({
						queryKey: ["evento-data", id],
					});
				},
				onError: (erro) => {
					console.log(erro);
				},
			}
		);
	};

	const removePalestra = (palestraId) => {
		deletePalestra(
			{ values: { idPalestra: palestraId } },
			{
				onSuccess: () => {
					setSnackbar({
						message: "Palestra deletada com sucesso!",
						open: true,
						severity: "success",
					});
					queryClient.invalidateQueries({
						queryKey: ["evento-data", id],
					});
				},
				onError: () => {
					setSnackbar({
						message: "Erro ao apagar palestra!",
						open: true,
						severity: "error",
					});
				},
			}
		);
	};

	return (
		<div className='home_container'>
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
			{!isLoading && data && (
				<>
					<div className='title'>
						<h1>{data.tituloEvento}</h1>
					</div>
					<div
						className='container_adicionar'
						style={{
							alignItems: "start",
							justifyContent: "space-between",
							display: "flex",
							gap: "20px",
						}}
					>
						<div className='area_form' style={{ width: "100%" }}>
							<TablePalestrantes
								palestrantes={data.palestras}
								showRemove={data.idUsuario == keycloak.subject}
								removePalestra={removePalestra}
							/>
						</div>
						{data.idUsuario == keycloak.subject && (
							<div className='area_image'>
								<div className='div_container'>
									<h2>Cadastrar Palestra:</h2>

									<form onSubmit={handleSubmit(onSubmit)}>
										<label>Horário do Evento:</label>
										<input
											type='time'
											style={{
												padding: "0.5em 3em",
												width: "50%",
												marginLeft: "25%",
												cursor: "pointer",
											}}
											{...register("horario", {
												required: true,
											})}
										/>
										{errors.horario && (
											<span>Campo Obrigatório!</span>
										)}

										<input
											placeholder='Nome da Palestra'
											{...register("nome", {
												required: true,
											})}
										/>
										{errors.nome && (
											<span>Campo Obrigatório!</span>
										)}

										<input
											placeholder='Nome do Palestrante'
											{...register("nomePalestrante", {
												required: true,
											})}
										/>
										{errors.nomePalestrante && (
											<span>Campo Obrigatório!</span>
										)}

										<input
											placeholder='Expertise do Palestrante'
											{...register(
												"expertisePalestrante",
												{
													required: true,
												}
											)}
										/>
										{errors.expertisePalestrante && (
											<span>Campo Obrigatório!</span>
										)}
										{/* errors will return when field validation fails  */}
										{(errors.horario ||
											errors.nome ||
											errors.nomePalestrante) && (
											<span>
												Preencha todos os campos!
											</span>
										)}

										<input
											type='submit'
											className='button_form'
											value='Cadastrar'
										/>
									</form>
								</div>
							</div>
						)}
					</div>
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
				</>
			)}
		</div>
	);
};
