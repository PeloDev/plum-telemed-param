import React from 'react';
import Cards from '../cards/aboutcards';
import App from '../content/content';
import Footer from '../footer/footer';
import Slides from '../welcome/welcome'

  
const Home = () => {
  return (
    <div>
      <Slides/>
      <Cards/>
      <App />
      <Footer />
    </div>
  );
};
  
export default Home;