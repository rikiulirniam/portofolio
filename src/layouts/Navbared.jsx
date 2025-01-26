import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Squares from "../components/Squares/Squares";


export const Navbared = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        
        <Outlet />

      </div>
    </>
  );
};
