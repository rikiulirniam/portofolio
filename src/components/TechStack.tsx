import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import data from '../resource/index.json'
import { iconMap } from '../resource/Images'

export default function TechStack() {

  return (
    <section id='techstack' className='flex justify-center flex-col items-center bg-black text-white'>
      <h1 className='pt-12 pb-8 font-semibold text-3xl underline'>Tech Stack</h1>

      {/* Mobile: Swiper */}
      <div className="w-full px-6 flex justify-center md:hidden pb-14">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
        //   navigation
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {data.teknologi.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border p-5 bg-[#111] rounded-md shadow min-h-52 w-full">
                <div className="flex items-center pb-2">
                  <img src={iconMap[item.icon]} width={35} alt={item.name} />
                  <h2 className='text-xl font-medium px-4'>{item.name}</h2>
                </div>
                <p className='text-gray-400'>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Grid Wrap */}
      <div className="hidden md:flex justify-center flex-wrap pb-14 gap-4 px-6">
        {data.teknologi.map((item, index) => (
          <div key={index} className="border p-5 w-72 bg-[#111] rounded-md shadow">
            <div className="flex items-center pb-2">
              <img src={iconMap[item.icon]} width={35} alt={item.name} />
              <h2 className='text-xl font-medium px-4'>{item.name}</h2>
            </div>
            <p className='text-gray-400'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
