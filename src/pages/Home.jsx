import { Link } from "react-router-dom";
import { Typing } from "../components/Typing";
import { useEffect, useState } from "react";

export const Home = () => {
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => {
      setShowEmail(true);
    }, 1600);
    return () => clearTimeout(show);
  }, []);
  return (
    <>
      <nav className="border-b-2 bg-transparent flex items-center justify-between fixed bg-black top-0 left-0 w-full">
        <div className="inline-block px-8 py-4">
          <h1 className=" flex items-center justify-center text-white text-xl font-mono font-bold">
            <Typing rawText="-Riki Ulir Niam" />
          </h1>
          <p className="text-white h-[2rem] text-sm font-mono">
            {showEmail && <Typing rawText="-rikiulir@gmail.com" />}
          </p>
        </div>
        <div className="flex items-center justify-center font-mono px-10">

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
