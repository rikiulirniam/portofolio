import { Link } from "react-router-dom";
import { Typing } from "../components/Typing";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Swal from "sweetalert2";

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
      color: 'black',
      confirmButtonText: "English",
      confirmButtonColor: 'black',
      denyButtonText: `Indonesian`,
      denyButtonColor: 'black',
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
      <motion.nav
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-transparent flex items-center justify-between fixed bg-transparent top-0 left-0 w-full"
      >
        <div className="inline-block px-6 py-4">
          <h1 className=" flex items-center justify-center text-white text-xl font-mono font-bold">
            {/* <Typing rawText="-Riki Ulir Niam" /> */}
            <span>Riki Ulir Niam</span>
          </h1>
          <p className="text-white h-[2rem] text-sm font-mono">
            <div className="text-left font-semibold text-white">
              <span>rikiulir@gmail.com</span>
            </div>
          </p>
        </div>
        <div className="flex items-center justify-center font-mono px-4">
          <span className="px-6 text-sm font-bold place-items-center">
            <a href="#" className="text-white">
              Home
            </a>
          </span>
          <span className="px-6 text-sm font-bold place-items-center">
            <a href="#" className="text-white">
              Contact
            </a>
          </span>
        </div>
      </motion.nav>

      <main className="bg-black min-h-screen py-28 w-full">
        <div className="hero-section flex items-center justify-center bg-black">
          <div className="intro w-1/2 flex flex-col justify-center px-36">
            <h1 className="text-5xl font-mono">
              <Typing rawText="-Hello, my name is Riki" />
            </h1>
            <motion.p
              initial={{ x: 0 }}
              animate={{ x: 10 }}
              transition={{ duration: 0.5 }}
              className="text-white text-md my-2"
            >
              a web developer focused on creating modern and responsive digital
              solutions!
            </motion.p>
            <div className="w-full flex items-center px-3 gap-2">
              <button
                className="bg-white rounded p-2 px-5"
                popovertarget="chooseLangCv"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
              <a
                className="border-white border-2 rounded text-white  p-2 px-5"
                href="/"
              >
                Mio
              </a>
            </div>
          </div>
          <div className="img-profile w-1/2 flex items-center justify-center">
            <div className="home-img w-1/2 rounded-full overflow-hidden">
              <img
                src="./images/riki1.png"
                className="w-full h-full object-cover"
                alt="r"
              />
            </div>
          </div>
        </div>
      </main>
      <motion.div
        className="progress-bar fixed bottom-0 left-0 w-screen h-1 text-left bg-white"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </>
  );
};
