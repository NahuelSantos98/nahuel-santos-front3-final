import React, {useContext}from 'react'
import { ContextGlobal } from '../Components/context/global.context'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const {state} = useContext(ContextGlobal)
  const idDentist = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={state.theme}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail