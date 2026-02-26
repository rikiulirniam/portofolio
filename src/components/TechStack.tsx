import 'swiper/css'
import 'swiper/css/navigation'

import data from '../resource/index.json'
import { iconMap } from '../resource/Images'

export default function TechStack() {

  return (
    <section id='techstack' className='flex justify-center flex-col items-center py-6 bg-black text-white'>

        <h1 className='md:text-2xl font-semibold underline p-4'>My Tech Stack</h1>
      <div className="flex justify-center flex-wrap gap-4 px-6">
        {data.teknologi.map((item, index) => (
          <div key={index} className="p-3 rounded-md shadow group cursor-pointer flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
              <img src={iconMap[item.icon]} className='w-full h-full object-contain' alt={item.name} />
            </div>
            <h2 className='hidden md:block text-xs font-medium text-center mt-2 opacity-0 whitespace-nowrap group-hover:opacity-100 transition-opacity ease-in duration-300'>
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  )
}
