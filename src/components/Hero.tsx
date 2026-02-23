import headerImage from "../assets/hero.png"
import data from "../resource/index.json"

export const Hero = () => {
    return (
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
            <img src={headerImage} className='h-full px-10 self-end ' alt="riki" />
        </section>
    )
}