'use client'
import { Productos } from '../../components/Productos'
import { useProducts } from '../../hooks/useProducts'
import { Loader } from '../../components/Loader'


const CatalogoPage = () => {
  const {items, loading} = useProducts()
  console.log(items)
  return (loading ? <Loader/> : <Productos rf={items}/>)
}

export default CatalogoPage