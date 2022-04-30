import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PresentationContent from '../components/PresentationContent';
import { Link } from 'react-router-dom';

export default function Options() {

  return (
    <div className='options-container'>
      <PresentationContent />
      <div className='options-button-container'>
        <button>Fazer Login</button>
        <button>Criar uma Conta</button>
        <button>Realizar uma Consulta</button>
      </div>
    </div>
  );
}
