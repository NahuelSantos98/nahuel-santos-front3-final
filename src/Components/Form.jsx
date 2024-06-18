import { useState, useContext } from "react";
import { ContextGlobal } from "./context/global.context";

const Form = () => {

  const {state} = useContext(ContextGlobal)

  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: ''
  })
  const [error, setError] = useState(false)
  const [enviado, setEnviado] = useState(false)
  
  
  const handleNombre = e => setUser({...user, nombre : e.target.value})
  const handleApellido = e => setUser({...user, apellido : e.target.value})
  const handleEmail = e => setUser({...user,email:  e.target.value})
  
  const validacionTextInput5 = (input) =>{
  
    const inputWithoutSpaces = input.trim()
          
          if(inputWithoutSpaces.length > 5){ 
              return true
          }else {
              return false
          }
  
  }
  const validacionEmailInput = (input)=>{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(input);
  }

  
  const handleSubmit = e =>{
    e.preventDefault()
  
  const nameValidacion = validacionTextInput5(user.nombre)
  const apellidoValidacion = validacionTextInput5(user.apellido)
  const emailValidacion = validacionEmailInput(user.email)

  if (!nameValidacion || !apellidoValidacion || !emailValidacion ) {
    setError(true)
    setEnviado(false)
  }else{
    setError(false)
    setEnviado(true)
  }
}

  return (
<div className={`${state.theme} formPadding`}>
      <form  onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder="Name"  onChange={handleNombre} id="name" required/>

        <label>Surname</label>
        <input type="text" placeholder="Surname" onChange={handleApellido} id="surname" required/>

        <label>Email:</label>
        <input type="text" placeholder="Email" onChange={handleEmail} id="email" required/>
        <button type="submit">Submit</button>
      </form>
      {error && <h3 style={{color: 'red'}}>Por favor verifique su información nuevamente</h3>}
      {enviado && <h3>Gracias {user.nombre + " " + user.apellido}, te contactaremos cuando antes vía mail</h3>}
    </div>
  );
};

export default Form;
