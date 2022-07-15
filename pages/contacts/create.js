import {useState} from 'react'
import Head from 'next/head'

const InicioEstado = {nombre:'', correo:'', telefono:'', comentarios:''}

function Create() {
    const [contacto, setContacto] = useState(InicioEstado)
    const [isLoading, setIsLoading] = useState(false)
    
    const handleChange = (e) => {
      const Valor = e.target.value
      const Nombre = e.target.name
      setContacto({ ...contacto, [Nombre]: Valor})}
  
    const handleSubmit = (e) => {e.preventDefault()
    if (!contacto.nombre) {console.log("Necesario Campo Nombre")}
    setIsLoading(true)
     //(Creamos la Peticion FETCH a nuestra Base de Datos tipo POST(Vamos a Parar al Controlador postContactos))
    fetch('http://localhost:5000/api/v1/contactos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...contacto})
    })
    .then((res) => res.json())
    .then(data => {if(data.ok) {console.log("Contacto creado con EXITO!")
     setContacto(InicioEstado)
     setIsLoading(false)}})
    .catch((err) => console.log(err))}

  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Antic&display=swap" rel="stylesheet"/>
      </Head>
      <div>
        <form>
        <fieldset>
        <h1>Invitación</h1> <hr></hr> <br></br>
        <p>Si te interesan estas herramientas, te invito a contactarme, te respondere a la mayor brevedad, </p><br></br> 
        <input onChange={handleChange} value={contacto.nombre} class="controls" type="text" name="nombre" id="nombre"  placeholder="Nombre y Apellidos:" required/><br></br>
        {/* <input onChange={handleChange} value={contacto.correo} class="controls" type="email" name="correo" id="correo" placeholder="E-mail:" required/><br></br>
        <input onChange={handleChange} value={contacto.telefono} class="controls" type="text" name="telefono" id="telefono" placeholder="Telefono:"/><br></br>
        <textarea onChange={handleChange} value={contacto.comentarios} class="controls" name="comentarios" id="comentarios" rows="4" cols="30" placeholder="Mensaje:"/><br></br><br></br>
        <button onSubmit={handleSubmit} class="controls boton"> {isLoading ? 'Enviando': 'Enviar'}</button><br></br><br></br> */}
        </fieldset>
        </form>
      </div>
      <style jsx global>
        {`
        .App {
            text-align: center;
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
          
          .controls {
            width: 90%;
            background: white;
            padding: 8px;
            border-radius: 5px;
            margin: 5px;
            font-family: Antic;
            border-color: white;
            color: black;
          }
          
          .placeholder {
            color: black;
          }
          
          .boton {
            width: 60%;
          }
          
          .boton:hover {
            
            background-color: #999;
            border-color: black; 
          }
          
          h1{
            letter-spacing: 2px;
          }
        `}
      </style>
    </>
  )
}

export default Create