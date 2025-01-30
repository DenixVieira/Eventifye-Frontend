import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Styles/table.css";
import { useConfirmarPresenca } from "./hooks/useConfirmarPresenca";
import { useDeleteInscricao } from "./hooks/useDeleteInscricao";
import { useQueryClient } from "react-query";

export default function TableParticipante({ participantes, eventoId }) {
	const { mutate: confirmarPresenca } = useConfirmarPresenca();
	const { mutate: deletarInscricao } = useDeleteInscricao();
	const queryClient = useQueryClient();
	const confirmarInscricao = (idInscricao) => {
		confirmarPresenca(
			{
				values: { idInscricao, novoStatus: "CONFIRMADA" },
			},
			{
				onSuccess: () => {
					queryClient.invalidateQueries({
						queryKey: ["all-inscricoes-eventos-data", eventoId],
					});
				},
			}
		);
	};
	const excluirInscricao = (idInscricao) => {
		deletarInscricao({ values: { idInscricao: idInscricao } });
	};
	return (
		<div className='table_container'>
			<h2>Participantes</h2>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label='simple table'
					className='title_table'
				>
					<TableHead>
						<TableRow>
							<TableCell align='center'>ID</TableCell>
							<TableCell align='left'>NOME</TableCell>
							<TableCell align='center'>EMAIL</TableCell>
							<TableCell align='center'>
								STATUS PRESENCA
							</TableCell>
							<TableCell align='center'>PRESENÇA</TableCell>
							<TableCell align='center'>REMOVER</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{participantes.map((row) => (
							<TableRow key={row.id}>
								<TableCell scope='row' align='center'>
									{row.participante.id}
								</TableCell>
								<TableCell align='left'>
									{row.participante.nome}
								</TableCell>
								<TableCell align='center'>
									{row.participante.email}
								</TableCell>
								<TableCell align='center'>
									{row.statusInscricao}
								</TableCell>
								<TableCell align='center'>
									<button
										onClick={() =>
											confirmarInscricao(row.idInscricao)
										}
									>
										Confirmar presença
									</button>
								</TableCell>
								<TableCell align='center'>
									<button
										onClick={() =>
											excluirInscricao(row.idInscricao)
										}
									>
										Remover
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
