import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'


function List() {
  let url = 'http://localhost:5000/api/v1/contactos/';
  fetch(url)
      .then( response => response.json() )
      .then( data =>  mostrarData(data))
      .catch( error => console.log(error))

  const mostrarData = (data) => {
      let main = ''
      for (let i = 0; i <data.length; i++) {      
         main += `<tr><td>${data[i].nombre}</td><td>${data[i].correo}</td><td>${data[i].telefono}</td></tr>`
      }
      document.getElementById('data').innerHTML = main
  }

  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css2?family=Antic&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="/css/list.css"></link>
    </Head>
    
    <div>
    <header>
        <nav class="navbar navbar-expand-lg navbar-info bg-info">
            <div class="container-fluid" id="navcontent">
              <Image src="/img/Logo.jpg " alt="GowPlay" width="60px" height="60px"></Image>
              <a class="navbar-brand" href="#">Digitaliza tu Negocio</a>
            </div>
        </nav>
    </header>
    <main>

    <table class="table" id="tabla">
    <thead class="thead-dark">
      <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Telefono</th>
      </tr>
    </thead>

    <tbody id="data">
    <th scope="row"></th>
    </tbody>

    </table>
    </main>
    </div>
    </>
  )
}

export default List