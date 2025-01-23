'use client'
import { Loader } from "@/components/Loader"
import { useTimer } from "@/hooks/useTimer"


const CarritoPage = () => {
  const {timer} = useTimer()
  return  (timer ?
    <div className="flex justify-center items-center w-full h-[93vh]">CarritoPage</div>
  : <Loader/> 
)
}

export default CarritoPage