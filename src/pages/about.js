import React from 'react';
import AboutContent from '../about/about';
import Footer from '../footer/footer';
import Banner from '../about/aboutbanner';
import BottomCards from '../about/bottomcards';
 
  
const About = () => {
  return (
    <div>
      <Banner />
      <AboutContent />
      <BottomCards />
      <Footer />
    </div>
  );
};
  
export default About;