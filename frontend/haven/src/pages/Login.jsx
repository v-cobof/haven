import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PresentationContent from '../components/PresentationContent';
import { Link } from 'react-router-dom';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {email, password};
    console.log(user)
  }

  return (
    <div className='login-container'>
      <PresentationContent />
      <form onSubmit={handleSubmit}>
        <input 
            placeholder='Email'
            type="email"
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            placeholder='Senha'
            type="password"
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button>Fazer Login</button>
      </form>
    </div>
  );
}
