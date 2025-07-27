import React from "react";
import data from "../resource/index.json"
import Stack from '../Stack/Stack';
import useWindowSize from '../resource/Provider';
import TechStack from '../components/TechStack';

function Public(){
     const [width] = useWindowSize();
  const cardWidth = width < 768 ? 300 : 500
  const cardHeight = width < 768 ? 200 : 350
  

  return (
    <React.Fragment>
      <div className="vw-100 bg-[white] scroll-smooth delay-300 overflow-x-hidden ">
          <header className='absolute top-0 left-0 bg-transparent z-10 w-full'>
            <nav className='p-4 flex justify-center gap-6'>
              <a className=' text-[#000000cc] hover:text-black hover:underline hover:font-medium' href='#techstack'>Tech Stack</a>
              <a className=' text-[#000000cc] hover:text-black hover:underline hover:font-medium' href='#aboutme'>About Me</a>
              <a className=' text-[#000000cc] hover:text-black hover:underline hover:font-medium' href='#contactme'>Contact Me</a>
            </nav>
          </header>
          <section className="flex justify-center flex-col-reverse md:flex-row items-center md:min-h-[400px] min-h-[750px] " style={{background : "linear-gradient(to right, #9da0a7, #988e8c,rgb(206, 182, 177) )"}}>
              <div className="flex flex-col items-start gap-5 px-4 py-12">
                <h1 className="font-bold text-6xl">Hello, I'm {data.nama_panggilan}!</h1>
                <p className='text-1xl font-medium'>Fullstack Web Developer and Programming Enthusiast -</p>
                <a href='#contactme' className="p-3 px-5 font-reguler border-2 border-black
                  transition-all duration-300 ease-in-out cursor-pointer
                  hover:delay-150 hover:bg-black hover:text-white hover:opacity-80">
                  Contact Me
                </a>

              </div>
              <img src="./riki.png" className='h-full px-10 self-end ' alt="riki" />
          </section>
          <TechStack />
          <section id='aboutme' className=' bg-gray-50 py-10 flex flex-col items-center justify-center '>
              <div className="flex items-center justify-center flex-col md:flex-row">
                <div className="img-container pe-6 max-w-screen">
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: cardWidth, height: cardHeight }}
                    cardsData={data.images}
                  />
                </div>
                <div className="aboutme-text-container md:w-[44rem] w-[auto] text-black md:px-8 px-[10%]">
                  <h1 className='md:text-6xl text-4xl font-bold py-4 w-[80%]'>A Few Words About Me</h1>
                  <p className='pb-4  font-medium text-[1.1em]'>{data.about.subheading}</p>
                    <p className='text-[#535353] text- pb-6'>{data.about.text}</p>
                    <a href='/public/Web Developer - Riki Ulir Niam.pdf' className="p-3 px-5 font-reguler border-2 border-black
                      transition-all duration-300 ease-in-out cursor-pointer
                      hover:delay-150 hover:bg-black hover:text-white hover:opacity-80">
                      Download CV
                    </a>

                </div>
              </div>
          </section>
          <section  id='timeline' className='flex justify-center flex-col items-center bg-[#ffffff] text-black'>
            <div className="flex justify-center flex-wrap py-8 gap-4">
            {data && data.pengalaman.map((item, key) => (

              <div className="flex flex-col  border- p-5 w-72 " key={key} >
                <p className='text-[0.8em] font-medium'>{item.tag}</p>
                <div className="flex items-center py-2">
                  <h2 className='text-5xl font-bold text-[#464646ab] '>
                    {item.year}
                  </h2>
                </div>
                  <p className='pb-4  font-medium text-[1em]'>{item.subheading}</p>
                  <p className='text-[#535353] text-[0.9em]'>{item.text}</p>
              </div>
              ))}
            </div>
          </section>
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
                        <img src={item.img} alt="-" className='' />
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
        </div>
    </React.Fragment>
  )
}

export default Public;