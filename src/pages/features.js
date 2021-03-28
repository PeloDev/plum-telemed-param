import React from 'react';
import Banner from '../features/banner';
import FeatureCards from '../features/featurecard';
import Footer from '../footer/footer';
import GenCol from '../features/genericol';
  
const Features = () => {
  return (
    <div>
     <Banner />
     <GenCol />
     <FeatureCards />
     <Footer />
    </div>
  );
};
  
export default Features;