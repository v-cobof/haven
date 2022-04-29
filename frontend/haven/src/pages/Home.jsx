import React from 'react';


import { Link } from 'react-router-dom';
import PresentationContent from '../components/PresentationContent';

export default function App() {

  return (
    <div className='home-container'>
      <PresentationContent />
      <button id='home-button'>Começar</button>
    </div>  
  );
}
