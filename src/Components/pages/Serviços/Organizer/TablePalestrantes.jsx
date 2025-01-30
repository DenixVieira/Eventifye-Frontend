import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Styles/table.css";

export default function TableParticipante({
	palestrantes,
	showRemove,
	removePalestra,
}) {
	return (
		<div className='table_container'>
			<h2>Palestras</h2>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label='simple table'
					className='title_table'
				>
					<TableHead>
						<TableRow>
							<TableCell align='center'>HORÁRIO</TableCell>
							<TableCell align='left'>NOME</TableCell>
							<TableCell align='center'>PALESTRANTE</TableCell>
							<TableCell align='center'>AREA</TableCell>
							{showRemove && (
								<TableCell align='center'>REMOVER</TableCell>
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{palestrantes.map((row) => (
							<TableRow key={row.idPalestra}>
								<TableCell scope='row' align='center'>
									{row.horarioPalestra}
								</TableCell>
								<TableCell align='left'>
									{row.nomePalestra}
								</TableCell>
								<TableCell align='center'>
									{row.palestrante.nomePalestrante}
								</TableCell>
								<TableCell align='center'>
									{row.palestrante.areaExpertisePalestrante}
								</TableCell>
								{showRemove && (
									<TableCell align='center'>
										<button
											onClick={() =>
												removePalestra(row.idPalestra)
											}
										>
											REMOVER
										</button>
									</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
