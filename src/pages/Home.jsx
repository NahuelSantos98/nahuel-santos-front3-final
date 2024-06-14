import React, {useContext}from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/context/global.context'



const Home = () => {
  const {state} = useContext(ContextGlobal)


  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home