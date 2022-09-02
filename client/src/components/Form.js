import {useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"

export default function Form() {
  let navigate = useNavigate();
  let location = useLocation();
  const [formObj, setFormObj] = useState({})
  const [departments, setDepartments] = useState([]);
  const [jabatan, setJabatan] = useState([]);
  const [pathName, setPathName] = useState("")
  
  useEffect(() => {
    setPathName(location.pathname)
    listDepartments()
  });

  const listDepartments = async () => {
    const result = await axios({
      method : "GET",
      url : "http://localhost:5000/departments"
    })
    setDepartments(result.data.data)
  }

  const listJabatanInDep = async (id) => {
    const result = await axios({
      method : "GET",
      url : "http://localhost:5000/departments/"+id
    })
    setJabatan(result.data.data.Jabatans)
  }

  const onChangeForm = (e) => {
    const {name, value} = e.target
    setFormObj({
      ...formObj,
      [name]:value
    })
    console.log(formObj);
  }

  const onChangeDep = (e) => {
    listJabatanInDep(e.target.value)
  }

  const onSubmitForm = async(e) => {
    e.preventDefault()
    await axios({
      method : "POST",
      url : "http://localhost:5000/karyawan/",
      data : formObj
    })
    navigate("/karyawan", { replace: true });
  }

  return (
    <>
    {pathName === "/karyawan/tambah" &&
    <>
    <h1>FORM KARYAWAN</h1>
    <form onSubmit={onSubmitForm} method="POST">
      <label>
        Nama:
        <input type="text" name="name" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Usia:
        <input type="text" name="age" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Jenis Kelamin
        <select name="gender" onChange={onChangeForm}>
          <option value="L">Laki-Laki</option>
          <option value="P">Perempuan</option>
        </select>
      </label><br /><br />
      <label>
        Tanggal Lahir:
        <input type="date" name="tanggal_lahir" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Alamat:
        <input type="text" name="alamat" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Department
        <select name="dep" onChange={onChangeDep}>
          <option defaultValue={0} disabled>SELECT YOUR OPTION</option>
          {departments.map(e =>
            <option value={e.id} key={e.id}>{e.nama_department}</option>
          )}
        </select>
      </label><br /><br />
      <label>
        Jabatan
        <select name="id_jabatan" onChange={onChangeForm}>
          {jabatan.map(e =>
            <option value={e.id} key={e.id}>{e.nama_jabatan}</option>
          )}
        </select>
      </label><br /><br />
      <button type="submit">SUBMIT</button>
    </form>
    </>
    }
    {pathName === "/department/tambah" &&
    <>
    <h1>FORM DEPARTMENT</h1>
    {/* <form onSubmit={onSubmitForm} method="POST">
      <label>
        Nama:
        <input type="text" name="name" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Usia:
        <input type="text" name="age" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Jenis Kelamin
        <select name="gender" onChange={onChangeForm}>
          <option value="L">Laki-Laki</option>
          <option value="P">Perempuan</option>
        </select>
      </label><br /><br />
      <label>
        Tanggal Lahir:
        <input type="date" name="tanggal_lahir" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Alamat:
        <input type="text" name="alamat" onChange={onChangeForm}/>
      </label><br /><br />
      <label>
        Department
        <select name="dep" onChange={onChangeDep}>
          <option defaultValue={0} disabled>SELECT YOUR OPTION</option>
          {departments.map(e =>
            <option value={e.id} key={e.id}>{e.nama_department}</option>
          )}
        </select>
      </label><br /><br />
      <label>
        Jabatan
        <select name="id_jabatan" onChange={onChangeForm}>
          {jabatan.map(e =>
            <option value={e.id} key={e.id}>{e.nama_jabatan}</option>
          )}
        </select>
      </label><br /><br />
      <button type="submit">SUBMIT</button>
    </form> */}
    </>
    }
    </>
  );
}
