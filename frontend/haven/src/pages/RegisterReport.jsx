import React, { useState } from 'react';
import { useLoadScript } from "@react-google-maps/api"
import PresentationContent from '../components/PresentationContent';
import InputMask from 'react-input-mask';
import Footer from '../components/Footer';
import Places from "../components/Places";

export default function RegisterUser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const [crime, setCrime] = useState('');
    const [otherCrime, setOtherCrime] = useState(false);
    const [otherCrimeContent, setOtherCrimeContent] = useState('');

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
      });
    
      if (loadError) return "Error loading maps";
      if (!isLoaded) return "loading Maps";

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
                    <Places 
                        setLocation={(position) => {
                        setLocation(position);
                        }}
                    />
                        {/*<input 
                            placeholder='Endereço'
                            type="text"
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button>Buscar</button>*/}
                        
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

                <div className='info-panel'>
                    <p>
                        <strong>ATENÇÃO </strong><br />
                        Este relato NÃO substitui um Boletim de Ocorrência e serve apenas para contribuir 
                        com nossas bases de dados e enriquecer nossas informações para os usuários. Para registrar 
                        um Boletim de Ocorrência oficial <a href='https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia'>CLIQUE AQUI</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );

}
