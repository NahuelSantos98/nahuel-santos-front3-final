import React, {useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/context/global.context'


const Contact = () => {

  const {state} = useContext(ContextGlobal)

  return (
    <div className={state.theme}>
      <h2 style={{marginTop: '0', marginLeft: '1rem'}}>Want to know more?</h2>
      <p style={{marginLeft: '1rem'}}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact