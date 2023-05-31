
import { useState } from 'react'

function Umur() {

  const name = 'Bagus'
  const [age, setAge] = useState(0)
  const onAddUmur = function() {
    const newAge = age + 1
    setAge(newAge)
  }
  const offAddUmur = function() {
    const newAge = age - 1
    setAge(newAge)
  }

  return (
    <>
      <h1>Hello {name}, What is your Age ? {age}</h1>
      <button onClick={onAddUmur}>Tambah Umur</button>
      <button onClick={offAddUmur}>Kurang Umur</button>
    </>
  )
}

export default Umur
