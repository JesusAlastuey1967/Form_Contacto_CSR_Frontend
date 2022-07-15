import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hola JESUS!</h1>
      <Link href='/contacts/create'>Crear Producto</Link>
    </div>
  )
}
