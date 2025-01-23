import React from 'react'
import { CircleLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-[93vh]'>
      <CircleLoader color="#36d7b7" />
    </div>
  )
}