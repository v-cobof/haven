import React, { useState } from 'react';

import PresentationContent from '../components/PresentationContent';
import InputMask from 'react-input-mask';

export default function RegisterUser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {email, password};
        console.log(user)
    }

    const [phone, setPhone] = useState("");
    return (
        <div className="form-container">
            <PresentationContent />


            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Nome completo'
                    type="text"
                    required 
                    req
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputMask
                    placeholder='CPF'
                    type='text'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    mask="999.999.999-99"
                    maskChar="_"
                />
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
                <input 
                    placeholder='Confirme sua senha'
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
