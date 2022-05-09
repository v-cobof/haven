import React, { useState } from 'react';


import PresentationContent from '../components/PresentationContent';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {email, password};
    console.log(user)
  }

  return (
    <>
    <div className='form-container'>
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
        {/*<button>Fazer Login</button>*/}
        <Link to="/user" className="button">Fazer login</Link>
      </form>
    </div>
    <Footer/>
    </>
  );
}
