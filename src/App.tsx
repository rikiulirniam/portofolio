import React, { useEffect } from 'react'
import './App.css'
import data from "./resource/index.json"

function App() {
  useEffect(() => {
  }, [])
  return (
    <React.Fragment>
      <div className="vw-100 bg-[#151424] scroll-smooth delay-300  ">

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
              <img src="./riki.png" className='h-full  self-end ' alt="riki" />
          </section>
          <section  id='next' className='flex justify-center flex-col-reverse md:flex-row items-center bg-[black] text-white'>
            <div className="flex py-14 gap-4">
            {data && data.teknologi.map((item) => (

              <div className="flex items-center border border-white w-80" >
                <div className="flex items-center p-5">
                  <img src={item.icon} width={50} alt="laravel" className='text-white' /> 
                  <h2 className='text-xl font-medium px-4'>
                    {item.name}
                  </h2>
                </div>
              </div>
              ))}
            </div>
          </section>
        </div>
    </React.Fragment>
  )
}

export default App
