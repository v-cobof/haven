import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PresentationContent from '../components/PresentationContent';
import { Link } from 'react-router-dom';

export default function Options() {

  return (
    <>
    <div className='options-container'>
      <PresentationContent />
      <div className='options-button-container'>
        <Link to="/login" className="button">Fazer Login</Link>
        <Link to="/register" className="button">Criar uma Conta</Link>
        <Link to="/map" className="button">Realizar uma Consulta</Link>
      </div>
    </div>
    <Footer />
    </>
  );
}
