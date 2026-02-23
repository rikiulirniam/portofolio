import { iconMap } from "../resource/Images";
import data from "../resource/index.json";

export const Footer = () => {
    return ( 
        <section id='contactme' className='flex justify-center max-w-screen flex-col items-center bg-[#ffffff] text-black'>
              <figure className=' max-w-screen md:w-[90%] w-screen md:h-[500px] flex flex-col justify-end bg-[#a09d90] p-12'>
                <header className='py-8'>
                  <h1 className='md:text-6xl text-4xl font-bold py-4'>Hire Me for Your Project</h1>
                  <p className="font-semibold ">
                    Hire Me for Your Project -
                  </p>
                  <hr className='w-[25%] my-4' />
                </header>
                <div className="flex md:flex-nowrap flex-wrap">
                  {data && data.contactme.map((item, key) => (

                    <div key={key} className='flex flex-col md:w-96 w-[80%] py-4 md:gap-6 gap-5'>
                      <span className='bg-white rounded-full flex justify-center items-center p-4 w-16'>
                        <img src={iconMap[item.img]} alt="-" className='' />
                      </span>
                      <p>{item.slogan}</p>
                      <a href={item.direct} className='font-bold text-xl'>
                        {item.content}
                      </a>
                  </div>
                  ))}
                </div>
              </figure>
          </section>
    )
}