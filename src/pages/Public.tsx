import React from 'react';
import TechStack from '../components/TechStack';
import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import { AboutMe } from "../components/AboutMe";
import { Timeline } from "../components/Timeline";
import { Footer } from "../components/Footer";
import { Projects } from '../components/Projects';



function Public(){

  return (
    <React.Fragment>
      <div className="vw-100 bg-[white] scroll-smooth delay-300 overflow-x-hidden ">
          <Header />
          <Hero />
          <TechStack />
          <AboutMe />   
          <Timeline />
          <Projects />
          <Footer />
        </div>
    </React.Fragment>
  )
}

export default Public;