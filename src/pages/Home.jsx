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
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between fixed top-0 left-0 py-4 z-50 w-full"
        style={{
          background:
            "linear-gradient(to bottom, black, rgba(0,0,0,0.8), transparent)",
        }}
      >
        <div className="flex flex-col justify-center px-6">
          <h1 className=" flex items-center justify-center text-white text-xl font-mono font-bold">
            {/* <Typing rawText="-Riki Ulir Niam" /> */}
            <span>Riki Ulir Niam</span>
          </h1>
          <p className="text-white text-sm font-mono">
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

      <main className="bg-white min-h-screen w-full flex flex-col justify-center align-middle">
        <div
          className="hero-section h-screen flex md:flex-col-reverse items-center justify-center border-b-4 border-red bg-black"
          style={{ clipPath: "polygon(0% 0%, 0% 100%, 20% 100%, 50% 100%, 100% 80%, 100% 0%)" }}
        >
          <div className="intro w-1/2 flex flex-col justify-center items-center ">
            <div className="intro-content w-3/5 flex flex-col justify-center items-center ">
              <h1 className="text-5xl font-mono">
                <Typing rawText="-Hello, my name is Riki" />
              </h1>

              <motion.p
                initial={{ x: 0 }}
                animate={{ x: 10 }}
                transition={{ duration: 0.5 }}
                className="text-white text-md my-2"
              >
                a web developer focused on creating modern and responsive
                digital solutions!
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
                  className="border-white border-2 rounded text-white  p-2 px-2 flex"
                  href="/"
                >
                  Learn more{" "}
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

          <div className="img-profile w-1/2 flex items-center justify-center">
            <div className="home-img w-1/2 rounded-full overflow-hidden relative group">
              {/* Gambar default */}
              <img
                src="./images/riki1.png"
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                alt="default"
              />
              {/* Gambar saat hover */}
              <motion.img
                whileHover={{
                  opacity: 1,
                  scale: 1.2,
                  // transition: { duration: 100 },
                }}
                src="./images/riki1.jpg"
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0"
                alt="hovered"
              />
            </div>
          </div>
        </div>
        <div className="hero-section h-screen flex md:flex-col-reverse items-center justify-center bg-white">
          <div className="intro w-1/2 flex flex-col justify-center items-center ">
            <div className="intro-content w-3/5 flex flex-col justify-center items-center ">
              <h1 className="text-5xl font-mono">
                <Typing
                  rawText="-Hello, my name is Riki"
                  textColor="black"
                  blinkColor="red"
                />
              </h1>

              <motion.p
                initial={{ x: 0 }}
                animate={{ x: 10 }}
                transition={{ duration: 0.5 }}
                className="text-white text-md my-2"
              >
                a web developer focused on creating modern and responsive
                digital solutions!
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
                  className="border-white border-2 rounded text-white  p-2 px-2 flex"
                  href="/"
                >
                  Learn more{" "}
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
          <div className="img-profile w-1/2 flex items-center justify-center">
            <div className="home-img w-1/2 rounded-full overflow-hidden relative group">
              {/* Gambar default */}
              <img
                src="./images/riki1.png"
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                alt="default"
              />
              {/* Gambar saat hover */}
              <motion.img
                whileHover={{
                  opacity: 1,
                  scale: 1.2,
                  // transition: { duration: 100 },
                }}
                src="./images/riki1.jpg"
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0"
                alt="hovered"
              />
            </div>
          </div>
        </div>
      </main>
      <motion.div
        className="progress-bar fixed bottom-0 left-0 w-screen h-1 text-left bg-red border-black border-10"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </>
  );
};
