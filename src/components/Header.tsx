export const Header = () => {
    return (
        <header className='absolute top-0 left-0 bg-transparent z-10 w-full'>
            <nav className='p-4 flex justify-center gap-6'>
                <a className=' text-[#000000cc] hover:text-black hover:underline hover:font-medium' href='#techstack'>Tech Stack</a>
                <a className=' text-[#000000cc] hover:text-black hover:underline hover:font-medium' href='#aboutme'>About Me</a>
                <a className=' text-[#000000cc] hover:text-black hover:underline hover:font-medium' href='#contactme'>Contact Me</a>
            </nav>
        </header>
    )
}   