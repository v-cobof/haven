import React, { useState } from 'react';

import PresentationContent from '../components/PresentationContent';
import InputMask from 'react-input-mask';

export default function RegisterUser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {email, password};
        console.log(user)
    }

    return (
        <div className="form-container">
            <PresentationContent />


            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Nome completo'
                    type="text"
                    required 
                    req
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputMask
                    placeholder='CPF'
                    type='text'
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
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
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                />
                <button>Fazer Login</button>
            </form>
        </div>
    );

}
