import React, { useState } from 'react';

import PresentationContent from '../components/PresentationContent';
import InputMask from 'react-input-mask';

export default function RegisterUser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');

    const [crime, setCrime] = useState('');
    const [otherCrime, setOtherCrime] = useState(false);
    const [otherCrimeContent, setOtherCrimeContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {email, password};
        console.log(user)
    }

    function handleCrime(content){
        setCrime(content);
        setOtherCrime(false);
        setOtherCrimeContent('')
    }

    return (

        <>
            <h1 className='report-h1'>Haven</h1>
            <div className="form-report-container">

                <form onSubmit={handleSubmit} className='form-report'>
                    <div className='search-container'>
                        <input 
                            placeholder='Endereço'
                            type="text"
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button>Buscar</button>
                    </div>
                    <div className='radios'>
                        <div><input type="radio" value="Furto" name="tipoCrime" onChange={(e) => handleCrime(e.target.value)}/> <label>Furto</label></div>
                        <div><input type="radio" value="Assalto" name="tipoCrime" onChange={(e) => handleCrime(e.target.value)}/> Assalto</div>
                        <div><input type="radio" value="Homicidio" name="tipoCrime" onChange={(e) => handleCrime(e.target.value)}/> Homicídio</div>
                        <div><input type="radio" value="Latrocinio" name="tipoCrime" onChange={(e) => handleCrime(e.target.value)}/> Latrocínio</div>
                        <div><input type="radio" value="Outro" name="tipoCrime" onChange={(e) => setOtherCrime(true)}/> Outro</div>
                        <input 
                            className={otherCrime ? 'other' : 'other field-not-active'}
                            placeholder='Descreva'
                            type="text"
                            value={otherCrimeContent}
                            onChange={(e) => setOtherCrimeContent(e.target.value)}
                        />
                    </div>
                    
                    <textarea placeholder='Descrição do crime'></textarea>
                    <button>Registrar denúncia</button>
                </form>
            </div>
        </>
    );

}
