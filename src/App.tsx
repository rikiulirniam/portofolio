import React, { useEffect } from 'react'
import './App.css'
import data from "./resource/index.json"
import Stack from './Stack/Stack';
import useWindowSize from './resource/Provider';
import TechStack from './components/TechStack';

function App() {

  const [width] = useWindowSize();
  const cardWidth = width < 768 ? 300 : 500
  const cardHeight = width < 768 ? 200 : 350
  
  useEffect(() => {
  }, [])
  return (
    <React.Fragment>
      <div className="vw-100 bg-[white] scroll-smooth delay-300  ">
          {/* <nav className=' sticky top-0 left-0 bg-transparent z-10'>
            ALKJSDHLKJAGHSDLKJGHALKSHJDLJHASGDLJHAGSDLhj
          </nav> */}
          <section className="flex justify-center flex-col-reverse md:flex-row items-center " style={{background : "linear-gradient(to right, #9da0a7, #988e8c,rgb(206, 182, 177) )"}}>
              <div className="flex flex-col items-start gap-5 px-4 py-10">
                <h1 className="font-bold text-6xl">Hello, I'm {data.nama_panggilan}!</h1>
                <p className='text-1xl font-medium'>Fullstack Web Developer and Programming Enthusiast -</p>
                <a href='#next' className="p-3 px-5 font-reguler border-2 border-black
                  transition-all duration-300 ease-in-out cursor-pointer
                  hover:delay-150 hover:bg-black hover:text-white hover:opacity-80">
                  Contact Me
                </a>

              </div>
              <img src="./riki.png" className='h-full px-10 self-end ' alt="riki" />
          </section>
          {/* <section  id='techstack' className='flex justify-center flex-col items-center bg-[black] text-white'>
              <h1 className='pt-12 pb-2 font-semibold text-3xl underline'>Tech Stack</h1>
            <div className="flex justify-center flex-wrap pb-14 gap-4">
            {data && data.teknologi.map((item) => (

              <div className="flex flex-col  border- p-5 w-72 " >
                <div className="flex items-center pb-2">
                  <img src={item.icon} width={35} alt="laravel" className='text-white' /> 
                  <h2 className='text-xl font-medium px-4'>
                    {item.name}
                  </h2>
                </div>
                  <p className='text-[grey]'>{item.text}</p>
              </div>
              ))}
            </div>
          </section> */}
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
                  <h1 className='md:text-6xl text-4xl font-bold py-4'>About Me</h1>
                  <p className='pb-4  font-medium text-[1.1em]'>{data.about.subheading}</p>
                    <p className='text-[#a0a0a0] text- pb-6'>{data.about.text}</p>
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
            {data && data.pengalaman.map((item) => (

              <div className="flex flex-col  border- p-5 w-72 " >
                <p className='text-[0.8em] font-medium'>{item.tag}</p>
                <div className="flex items-center py-2">
                  <h2 className='text-5xl font-bold text-[#464646ab] '>
                    {item.year}
                  </h2>
                </div>
                  <p className='pb-4  font-medium text-[1em]'>{item.subheading}</p>
                  <p className='text-[grey] text-[0.9em]'>{item.text}</p>
              </div>
              ))}
            </div>
          </section>
          {/* <section id='contactme' className='flex justify-center max-w-screen flex-col items-center bg-[#ffffff] text-black'>
              <figure className='w-6xl h-[500px] flex flex-col justify-center bg-[grey] p-4'>
                <h1 className='text-6xl font-bold'>Contact me</h1>
                <p className="font-semibold ">
                  Hire Me for Your Project
                </p>
              </figure>
          </section> */}
        </div>
    </React.Fragment>
  )
}

export default App
