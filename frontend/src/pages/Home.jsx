import React from 'react';
import LooperGroup from '../assets/LooperGroup2.png';
import HeroSection from '../components/HeroSection.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import './CustomePage.css'
import Nav from '../components/Nav.jsx'
import About from '@/components/About';
import bgimg from './LooperGroup2.png'
import Resume from '@/components/Resume';
const Home = () => {
  return (
   
<div  className="backgroundImg  ">
<img src={bgimg} alt="" className='hidden lg:block absolute -z-20   lg:h-[400vh] -right-[20%]'/>
<Nav />
<HeroSection />
<About />
<Experience />
<Skills />
<Projects />
<Resume />
<Footer />
</div>
    
  );
};

export default Home;
