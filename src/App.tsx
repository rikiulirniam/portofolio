import React from 'react'
import './App.css'

function App() {

  return (
    <React.Fragment>
      <div className="vw-100 bg-[#151424]">
          <section className="min-h-screen min-w-[80vw] flex justify-center items-center px-[10vw]" style={{background : "linear-gradient(to right, #9da0a7, #988e8c)"}}>
              <div className="flex flex-col items-start gap-5 px-4">
                <h1 className="font-bold text-6xl">Hello, I'm Riki!</h1>
                <p className='text-1xl font-medium'>Fullstack Web Developer and Programming Enthusiast -</p>
                <button className='p-2 px-4 font-medium border-2 hover:border-white hover:text-[white] hover:bg-black'>Contact Me</button>
              </div>
              <img src="./riki.png" className='h-[90vh] border-b-2' alt="riki" />
          </section>
          <section className='min-h-screen'>

          </section>
        </div>
    </React.Fragment>
  )
}

export default App
