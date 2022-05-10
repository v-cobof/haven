import React from 'react';


import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PresentationContent from '../components/PresentationContent';
export default function Home() {

  return (
    <>
    <div className='home-container'>
      <PresentationContent />
      <Link to="/options" className="button" id='home-button'>Começar</Link>
    </div>  
    <Footer/>
    </>
  );
}
