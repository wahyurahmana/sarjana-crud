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
export default function ListDepartment() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    listDepartments()
  });

  const listDepartments = async () => {
    const result = await axios({
      method : "GET",
      url : "http://13.212.8.243:5000/departments"
    })
    setDepartments(result.data.data)
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
          <Link to="/department/tambah" style={{ textDecoration: 'none', color:'white' }}><Button variant="contained">Tambah Department</Button></Link>
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nama Department</TableCell>
                <TableCell align="right">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map(el =>
                  <TableRow
                    key={el.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {el.nama_department}
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
