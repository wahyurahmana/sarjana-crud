import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.js"
import ListDepartment from "./views/Department.js"
import ListJabatan from "./views/Jabatan.js"
import ListKaryawan from "./views/Karyawan.js"
import Form from "./components/Form.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="department" element={<ListDepartment />} />
        <Route path="department/tambah" element={<Form />} />
        <Route path="jabatan" element={<ListJabatan />} />
        <Route path="karyawan" element={<ListKaryawan />} />
        <Route path="karyawan/tambah" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
