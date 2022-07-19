import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <div>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Antic&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="/css/index.css"></link>
    </Head>
    <header>
        <nav class="navbar navbar-expand-lg navbar-info bg-info">
            <div class="container-fluid" id="navcontent">
              <Image src="/img/Logo.jpg" alt="GowPlay" width="60px" height="60px"></Image>
              <a class="navbar-brand" href="#">Digitaliza tu Negocio</a>
            </div>
        </nav>
    </header>
    <br></br>
    <main>
        <div class="container">
        <hr></hr> <br></br> 
        <h1>Menú</h1>
        <div class="row">
        <div class="col">
            
            <br></br>
            <div class="list-group" id="menu">
              <Link href='/contacts/create' class="list-group-item list-group-item-action active" aria-current="true">Crear Clientes</Link>
              <Link href='/contacts/list' class="list-group-item list-group-item-action">Listado Clientes</Link>
            </div>          
        </div>
        </div>
        </div>
    </main> 
    </div>
 

  </>
  )
}
