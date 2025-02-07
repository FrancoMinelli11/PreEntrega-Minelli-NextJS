import Link from 'next/link'
import React from 'react'
import { ShoppingCart } from 'lucide-react'

const NavBar = () => {
  return (
    <div className='flex justify-between bg-teal-800 text-center p-1 shadow-sm shadow-zinc-500 font-semibold h-[7vh]'>
      <Link href="/"><h1>KayFs</h1></Link>
      <div className='flex gap-4'>
        <Link href="/catalogo">Catalogo</Link>
        <Link href="/carrito"><ShoppingCart width={20} height={20}/></Link>
        <Link href="/notfound">NotFound</Link>
      </div>
    </div>
  )
}

export default NavBar