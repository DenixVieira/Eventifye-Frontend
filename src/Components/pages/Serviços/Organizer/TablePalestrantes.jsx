import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Styles/table.css'

export default function TableParticipante({ Palestrantes }) {
  return (
    <div className='table_container'>
      <h2>Palestras</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='title_table'>
          <TableHead>
            <TableRow >
              <TableCell align="center">HORÁRIO</TableCell>
              <TableCell align="left">NOME</TableCell>
              <TableCell align='center'>PALESTRANTE</TableCell>
              <TableCell align="center">AREA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Palestrantes.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell scope="row" align='center'>
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.nascimento}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}