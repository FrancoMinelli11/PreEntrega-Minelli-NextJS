import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between bg-teal-800 text-center p-1 shadow-sm shadow-zinc-500 font-semibold h-[7vh]'>
      <h1>KayFs</h1>
      <div className='flex gap-4'>
        <Link href="/">Home</Link>
        <Link href="/catalogo">Catalogo</Link>
        <Link href="/carrito">Carrito</Link>
        <Link href="/notfound">NotFound</Link>
      </div>
    </div>
  )
}

export default NavBar