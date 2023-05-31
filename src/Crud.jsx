import React, { useState } from "react";

const Crud = () => {
  const [data, setRead] = useState([{
    nama : "Bagus",
    umur : 24
  }]);
  const [nama, setNama] = useState("")
  const [umur, setUmur] = useState()
  let [edit, setEdit] = useState(null)

  const onButtonSubmit = function() {
    if (edit === null) {
    const newData = data
    newData.push(
        {nama:nama, umur:umur}
    )
    setRead([...newData])
    } else {
        const newData = data
        newData[edit].nama = nama
        newData[edit].umur = umur
    }
  }

  const onDeleteClick = function(index) {
    const newData = data
    data.splice(index, 1)
    setRead([...newData])
  }

  const onEditClick = function(index) {
    const newData = data
    setEdit(index)
    setNama(newData[index].nama)
    setUmur(newData[index].umur)
    console.log(nama);
  }

  const handleSubmit = function(e) {
    setNama("")
    setUmur("")
    }

  return (
    <div>
      <h1>CRUD React JS</h1>
        {data.map((item, index) => (
            <div><p key={index}>Nama saya {item.nama} Umur saya {item.umur} tahun</p>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={() => onEditClick(index)}>Edit</button></div>
        ))}
      <form>
        <label>Nama : </label>  
        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)}/>
        <br />
        <label>Umur : </label>
        <input type="number"  value={umur} onChange={(e) => setUmur(e.target.value)}/>
        <br />
        <br />
        <button type="button" onClick={()=>{onButtonSubmit(); handleSubmit() }}>SAMBIT</button>
      </form>
    </div>
  );
};

export default Crud;
