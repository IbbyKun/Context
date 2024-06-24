import React from 'react';
import '../App.css';
import Navbar from './navbar';
import Hero from './heroPage';
import Mission from './mission';
import Choose from './choose';
import Portfolio from './portfolioCard';
import Founders from './founders';
import Card from './Card2';
import Price from './priceCard';
import Swipe from './CardPage';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Mission />
      <Choose />
      <Swipe />
      <Portfolio />
      <Founders />
      <Card />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
