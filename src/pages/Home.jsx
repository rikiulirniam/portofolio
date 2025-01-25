import { Link } from "react-router-dom";
import { Typing } from "../components/Typing";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Swal from "sweetalert2";
import { Navbar } from "../components/Navbar";
import DecryptedText from "../components/DecryptedText/DecryptedText";
import FallingText from "../components/FallingText/FallingText";

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  function handleDownloadCV() {
    Swal.fire({
      title: "Choose CV Language!",
      showDenyButton: true,
      color: "black",
      confirmButtonText: "English",
      confirmButtonColor: "black",
      denyButtonText: `Indonesian`,
      denyButtonColor: "black",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch("/CV_english.pdf").then((res) => {
          res.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);

            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "CV_riki.pdf";
            alink.click();
          });
        });
      } else if (result.isDenied) {
        fetch("/CV_indo.pdf").then((res) => {
          res.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);

            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "CV_riki.pdf";
            alink.click();
          });
        });
      }
    });
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div
          className="bg fixed -z-10 w-screen bg-black h-screen"
          style={
            {
              // background:
              // "linear-gradient(to top right,  rgba(1,2,2,0.8), rgba(0,0,0,0.9), black)",
            }
          }
        ></div>
        <section className="bg-transparent container min-h-screen w-full flex flex-col justify-center align-middle">
          <div className="hero-section h-screen w-full flex items-center justify-center  bg-transparent">
            <div className="intro w-1/2 flex flex-col justify-center  ">
              <div className="intro-content w-4/5 flex flex-col justify-center ">
                <h1 className="text-5xl font-mono">
                  <DecryptedText
                    text="Hello my name is Riki"
                    animateOn="view"
                    revealDirection="start"
                    className="text-white font-bold"
                    encryptedClassName="text-red font-bold"
                    characters="QPALOUCTHENWMowiauqyhtgfvznxml123408975!*&^%$#@?"
                    speed={50}
                    maxIter
                    ations={50}
                    sequential={true}
                  />
                </h1>

                <p className="text-white text-md my-2">
                  a web developer focused on creating modern and responsive
                  digital solutions!
                </p>
                <div className="w-full flex items-center py-2 gap-2">
                  <button
                    className="bg-white border-white text-black border-2 hover:opacity-75 rounded p-2 px-5"
                    popovertarget="chooseLangCv"
                    onClick={handleDownloadCV}
                  >
                    Download CV
                  </button>
                  <a
                    className="border-white border-2 rounded text-white  p-2 px-5 flex"
                    href="/"
                  >
                    Scroll Down{" "}
                    <span className="p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.0}
                        stroke="currentColor"
                        className="size-4 rotate-90"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="img-profile w-1/2 flex items-center justify-end">
              <div
                className="home-img w-3/5 rounded-full transition-all duration-300 hover:overflow-visible overflow-hidden relative group"
                style={{ clipPath: "" }}
              >
                {/* Gambar default */}
                <img
                  src="./images/riki1.png"
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                  alt="default"
                />
                {/* Gambar saat hover */}
                <motion.img
                  whileHover={{
                    opacity: 1,
                    scale: 1.1,
                    // transition: { duration: 100 },
                  }}
                  src="./images/riki2.png"
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0"
                  alt="hovered"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-transparent container h-[70vh]  w-full">
          <h1 className="text-4xl font-bold  text-center">Skills</h1>
          <div className="flex items-center justify-center  w-full h-[50vh]">
            <FallingText
              text={` Website HTML CSS JavaScript Full-Stack React API Integration Laravel Sanctum TailwindCSS Git Responsive`}
              highlightWords={[
                "JavaScript", // Menyoroti keahlian dalam JavaScript
                "React", // Menyoroti keahlian dalam React
                "Laravel", // Menyoroti keahlian dalam desain antarmuka dan pengalaman pengguna
                "HTML", // Menyoroti keahlian dalam HTML
                "CSS", // Menyoroti keahlian dalam CSS
                "TailwindCSS", // Menyoroti keahlian dalam TailwindCSS
                "Git", // Menyoroti keahlian dalam Git
                "Sanctum", // Menyoroti keahlian dalam integrasi API
                "Responsive Design", // Menyoroti keahlian dalam desain responsif
              ]}
              highlightClass="text-red font-bold"
              trigger="scroll"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </section>
        {/* <section className="bg-transparent container min-h-screen w-full flex flex-col justify-center align-middle">
            <h1 className="text-white">Hello World</h1>
         
        </section> */}
        {/* <motion.div
          className="progress-bar fixed bottom-0 left-0 w-screen h-1 text-left bg-white border-black border-10"
          style={{ scaleX, transformOrigin: "0%" }}
        /> */}
      </div>
    </>
  );
};
