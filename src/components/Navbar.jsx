import { motion } from "motion/react";
import DecryptedText from "./DecryptedText/DecryptedText";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center backdrop-blur fixed top-0 left-[50] border-solid border-gray border-b-2   py-4 px-10 z-50 w-screen"
      style={
        {
          // background: "rgba(0, 0, 0, 0.5)",
        }
      }
    >
      <div className="nav-content flex items-center justify-between container">
        <div className="flex flex-col justify-center ">
          <h1 className=" flex items-center justify-center text-white text-xl font-mono font-bold">
            <span>
              <DecryptedText
                text="Riki"
                animateOn="hover"
                revealDirection="start"
                className="text-white font-bold"
                encryptedClassName="text-red font-bold"
                characters="QPALOUCTHENWMowiauqyhtgfvznxml123408975!*&^%$#@?"
                speed={50}
                maxIterations={50}
                // sequential={true}
              />
              
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-6 font-mono px-4">
          <span className=" text-sm font-bold place-items-center">
            <a href="#" className="text-white">
              Home
            </a>
          </span>
          <span className=" text-sm font-bold place-items-center">
            <a href="#" className="text-white">
              Contact
            </a>
          </span>
        </div>
        <div className="social flex items-center gap-5 text-white">
          <a
            href="rikiulir@gmail.com"
            className="saturate-0 hover:saturate-100 cursor-pointer w-6 "
          >
            <img src="./images/social/linkedin.png" alt="linkedin" />
          </a>
          <a
            href=""
            className="saturate-0 hover:saturate-100 cursor-pointer w-6 "
          >
            <img src="./images/social/instagram.png" alt="instagram" />
          </a>
          <a
            href=""
            className="saturate-0 hover:saturate-100 cursor-pointer w-6 "
          >
            <img src="./images/social/email.png" alt="email" />
          </a>
          <a
            href=""
            className="saturate-0 hover:saturate-100 cursor-pointer w-6 "
          >
            <img src="./images/social/github.png" alt="github" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
