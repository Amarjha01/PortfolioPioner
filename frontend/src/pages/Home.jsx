import React from 'react';
import LooperGroup from '../assets/LooperGroup2.png';
import HeroSection from '../components/HeroSection.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import './CustomePage.css'
import Nav from '../components/Nav.jsx'
const Home = () => {
  return (
   
<div  className="backgroundImg h-fit ">
<Nav />
<HeroSection />
<Experience />
<Skills />
<Projects />
<Footer />
</div>
    
  );
};

export default Home;
