"use client"
import { useTimer } from '@/hooks/useTimer'
import React, { useEffect } from 'react'
import { Loader } from './Loader'

const Productos = () => {
  const {timer} = useTimer()
  return (timer ? <div className='flex justify-center'>
    <table className='w-11/12 text-center p-1 border m-2 center'>
      <thead className='border'>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody className='border'>
        <tr>
          <td>Producto 1</td>
          <td>100</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Producto 2</td>
          <td>200</td>
          <td>20</td>
        </tr>
      </tbody>
    </table>
  </div>
: <Loader/>
  )
}

export default Productos