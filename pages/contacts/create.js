import {useState} from 'react'
import Head from 'next/head'

const initialState = {nombre:'', correo:'', telefono:'', comentarios:''}

function Create() {
    const [contacto, setContacto] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    
    const handleChange = (e) => {
      const inputValue = e.target.value
      const inputName = e.target.name
      setContacto({...contacto, [inputName]: inputValue})}

      console.log(contacto)
  
    const handleSubmit = (e) => {
    e.preventDefault()
    if (!contacto.nombre) {console.log("Necesario Poner Nombre")}
    setIsLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(contacto),
    })
    .then((res) => res.json())
    .then(data => {if(data.ok) {console.log("Contacto creado con EXITO!")
    setContacto(initialState)
    setIsLoading(false)}})
    .catch((err) => {console.log({err})
    })}

  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Antic&display=swap" rel="stylesheet"/>
      </Head>
      <div>
        <form onSubmit={handleSubmit}> 
        <fieldset>
        <h1>Invitación</h1> <hr></hr> <br></br>
        <p>Si te interesan estas herramientas, te invito a contactarme, te respondere a la mayor brevedad, </p><br></br>
        <input onChange={handleChange} value={contacto.nombre} type="text" name="nombre" id="nombre"  placeholder="Nombre y Apellidos:" required/><br></br>
        <input onChange={handleChange} value={contacto.correo}  type="email" name="correo" id="correo" placeholder="E-mail:" required/><br></br>
        <input onChange={handleChange} value={contacto.telefono} type="text" name="telefono" id="telefono" placeholder="Telefono:"/><br></br>
        <textarea onChange={handleChange} value={contacto.comentarios}  name="comentarios" id="comentarios" rows="4" cols="30" placeholder="Mensaje:"/><br></br><br></br>
        <button>{isLoading ? 'Enviando': 'Enviar'}</button><br></br><br></br>
        </fieldset>
        </form>
      </div>
      <style jsx global>
        {`
          h1{
            letter-spacing: 2px;
          }
          form {
            height: 625px;
            width: 400px;
            background-color: rgba(23,162,184,255);
            margin: 35px auto;
            padding: 20px 10px;
            color: white;
            font-size: 18px;
            font-family: 'Antic';
            text-align: center;
          }
          input, textarea, button {
            width: 90%;
            background: white;
            padding: 8px;
            border-radius: 5px;
            margin: 5px;
            font-family: Antic;
            border-color: white;
            color: black;
          }
          button {
            width: 60%;
          }
          button:hover {
            background-color: #999;
            border-color: black; 
          }
        `}
      </style>
    </>
  )
}

export default Create