import React, { useContext } from 'react'
import imageDH from '/images/DH.png'
import { ContextGlobal } from './context/global.context'

const Footer = () => {

  const {state} = useContext(ContextGlobal)
  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src={imageDH} alt='DH-logo' />
    </footer>
  )
}

export default Footer
