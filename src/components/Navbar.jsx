import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex container items-center justify-between backdrop-blur fixed top-0 left-[50]  py-4 z-50 w-full"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="flex flex-col justify-center ">
        <h1 className=" flex items-center justify-center text-white text-xl font-mono font-bold">
          <span>Riki</span>
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
    </motion.nav>
  );
};
