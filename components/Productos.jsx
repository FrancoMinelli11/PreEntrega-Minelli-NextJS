import Image from "next/image"
export const Productos = ({rf}) => {
  return (
    <main>
      <h1 className="text-center text-3xl mb-4">Productos</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-2">
        {rf.map((item) => (
          <div key={item.id} className="bg-slate-400 shadow-md shadow-slate-500 flex flex-col items-center text-center h-72">
            <h2 className="bg-emerald-900 text-lg w-full h-1/6">{item.title}</h2>
            <div className="relative h-[66.666666%] w-full">
              <Image src={item.images[1]} alt={item.title} fill className="object-fill" />
            </div>
            <p className="w-full bg-emerald-900 h-1/6">${item.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}