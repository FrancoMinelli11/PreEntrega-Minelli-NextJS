'use client'
import React, { useState , useEffect} from 'react'

export const useTimer = () => {
    const [timer, setTimer] = useState(false)
      useEffect(() => {
        setTimeout(() => {
          setTimer(true)
        },'2000')
      },[])
  return {timer}
}
