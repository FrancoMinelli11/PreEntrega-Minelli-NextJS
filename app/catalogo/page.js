"use client"
import Productos from '../../components/Productos'
import { useTimer } from '@/hooks/useTimer'


const CatalogoPage = () => {
  const {timer} = useTimer()
  return (<Productos/>)
}

export default CatalogoPage