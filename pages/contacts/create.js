import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'

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
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css2?family=Antic&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="/css/create.css"></link>
      </Head>
      
      <header>
        <nav class="navbar navbar-expand-lg navbar-info bg-info">
            <div class="container-fluid" id="navcontent">
              <Image src="/img/Logo.jpg" alt="GowPlay" width="60px" height="60px"></Image>
              <a class="navbar-brand" href="#">Digitaliza tu Negocio</a>
            </div>
        </nav>
    </header>
    <div>
        <form onSubmit={handleSubmit}> 
        <fieldset>
        <h1>Invitación</h1> <hr></hr> <br></br>
        <p>Si te interesan estas herramientas, te invito a contactarme, te respondere a la mayor brevedad, </p><br></br>
        <input onChange={handleChange} value={contacto.nombre} type="text" name="nombre" id="nombre"  placeholder="Nombre y Apellidos:" required/><br></br>
        <input onChange={handleChange} value={contacto.correo}  type="email" name="correo" id="correo" placeholder="E-mail:" required/><br></br>
        <input onChange={handleChange} value={contacto.telefono} type="text" name="telefono" id="telefono" placeholder="Telefono:"/><br></br>
        <textarea onChange={handleChange} value={contacto.comentarios}  name="comentarios" id="comentarios" rows="4" cols="30" placeholder="Mensaje:"/><br></br><br></br>
        <button>{isLoading ? 'Enviando': 'Enviar'}</button>
        </fieldset>
        </form>
      </div>
    </>
  )
}

export default Create