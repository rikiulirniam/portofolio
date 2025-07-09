import React from 'react'
import './App.css'

function App() {

  return (
    <React.Fragment>
      <div className="vw-100 bg-[#151424]">
          <section className="min-h-screen min-w-[80vw] flex justify-center flex-col-reverse md:flex-row items-center px-[10vw]" style={{background : "linear-gradient(to right, #9da0a7, #988e8c,rgb(206, 182, 177) )"}}>
              <div className="flex flex-col items-start gap-5 px-4 py-10">
                <h1 className="font-bold text-6xl">Hello, I'm Riki!</h1>
                <p className='text-1xl font-medium'>Fullstack Web Developer and Programming Enthusiast -</p>
                <button className="p-3 px-5 font-reguler border-2 border-black
                  transition-all duration-300 ease-in-out
                  hover:delay-150 hover:bg-black hover:text-white hover:opacity-80">
                  Contact Me
                </button>

              </div>
              <img src="./riki.png" className='h-full  self-end ' alt="riki" />
          </section>
          <section className='min-h-screen bg-[rgb(69, 70, 73)]'>
 
          </section>
        </div>
    </React.Fragment>
  )
}

export default App
