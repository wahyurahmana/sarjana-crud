import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function ListKaryawan() {
  const [karyawan, setKaryawan] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    listKaryawan()
  });

  const listKaryawan = async () => {
    const result = await axios({
      method : "GET",
      url : "http://13.212.8.243:5000/karyawan"
    })
    setKaryawan(result.data.data)
    setLoading(false)
  }
  
  return (
    <>
    {loading &&
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    }
    {!loading &&
    <>
      <Stack spacing={2} direction="row">
        <Link to="/karyawan/tambah" style={{ textDecoration: 'none', color:'white' }}><Button variant="contained">Tambah Karyawan</Button></Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Tanggal Lahir</TableCell>
              <TableCell>Alamat</TableCell>
              <TableCell align="right">Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {karyawan.map(el =>
                <TableRow
                key={el.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {el.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {el.age}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {el.gender === "L" ? "Laki-Laki" : "Perempuan"}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {el.tanggal_lahir}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {el.alamat}
                  </TableCell>
                  <TableCell align="right">Delete | Edit</TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    }
    </>
  );
}
