import { Link } from "react-router-dom";
import { Typing } from "../components/Typing";

export const Home = () => {
  return (
    <>
      {/* <main classNameName="container w-screen h-screen flex flex-col items-center justify-center selection:bg-white selection:text-black bg-black">
        <div classNameName="content w-[95%] min-h-[100vh]">
          <h1
            classNameName="text-white text-xl font-bold pt-5 flex
           hover:tracking-widest transition-all duration-300 
           
           "
          >
            Riki Ulir Niam
          </h1>
          <a
            href="mailto:rikiulir@gmail.com"
            classNameName="text-white text-sm font-base flex "
          >
            rikiulir@gmail.com
          </a>
        </div>
      </main> */}
      <nav className="border-b-2 bg-transparent flex items-center justify-between border-b-white fixed bg-black top-0 left-0 w-full h-24">
        <div className="inline-block px-20 my-5">
          <h1 className=" flex items-center justify-center text-white text-2xl font-mono font-bold">
            <Typing rawText="-Riki Ulir Niam" />
          </h1>
          {/* <p className="text-white text-sm font-mono">
            <Typing rawText="-rikiulir@gmail.com" />
          </p> */}
        </div>
        <div className="flex items-center justify-center font-mono px-10">
          <span className="px-6 place-items-center">
            <a href="#" className="text-white">
              Home
            </a>
          </span>
          <span className="px-6 place-items-center">
            <a href="#" className="text-white">
              Project
            </a>
          </span>
          <span className="px-6 place-items-center">
            <a href="#" className="text-white">
              Contact
            </a>
          </span>
          <span className="px-6 place-items-center">
            <a href="#" className="text-white">
              Home
            </a>
          </span>
        </div>
      </nav>

      <main className="bg-black min-h-screen w-full">
        <div className="hero-section">
          <div className="intro"></div>
          <div className="img-profile">
            {/* <img src="./content/Riki.png" alt=""> */}
          </div>
        </div>
      </main>
    </>
  );
};
