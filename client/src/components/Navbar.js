import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/department" style={{ textDecoration: 'none', color:'white' }}>Department</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/jabatan" style={{ textDecoration: 'none', color:'white' }}>Jabatan</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/karyawan" style={{ textDecoration: 'none', color:'white' }}>Karyawan</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
