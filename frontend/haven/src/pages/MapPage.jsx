import React from 'react';
import { useLoadScript } from "@react-google-maps/api"
import Map from '../components/Map'
import ReportCard from '../components/ReportCard'
import {useState, useEffect} from "react";
import axios from "axios";
import greenCircle from '../assets/greenCircle.png'
import redCircle from '../assets/redCircle.png'
import yellowCircle from '../assets/yellowCircle.png'
import { BASE_URL } from '../utils/requests';
import { format } from 'date-fns';



export default function MapPage() {

  function setCepVal(cep){
    var newCep = cep.replace('-', '')

    setCep(newCep);
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const [cep, setCep] = useState('');

  const [reports, setReports] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [nivel, setNivel] = useState('')

  useEffect(() => {
    axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = "http://localhost:3000";

    axios.get(`${BASE_URL}/enderecos/${cep}/depoimentos`)
      .then(response => {
        setReports(response.data);
        console.log(response.data);


      });
    
      axios.get(`${BASE_URL}/usuarios`)
      .then(response => {
        setUsuarios(response.data);
        console.log(response.data);
        
      });

      axios.get(`${BASE_URL}/enderecos/${cep}/nivel-criminalidade`)
      .then(response => {
        setNivel(response.data);
        console.log(response.data);
      });

    
  }, [cep]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading Maps";


  


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const assalto = reports.filter(x => x.modalidadeCrime === "Assalto").length
  const furto = reports.filter(x => x.modalidadeCrime === "Furto").length

  return (
    <>
    <div className="map-super-container">
      <div>
        <h1 className='report-h1'>Haven</h1>

        <Map setCep ={setCepVal} nivel={nivel}/>
      </div>

      <div className="map-data-container">
        <h2>Dados</h2>
        <ul className="data-list">

          <li>{assalto} - Assaltos registrados neste local</li>
          <br/>
          <li>{furto} - Furtos registrados neste local</li>

        </ul>
        <ul className="circles-list">

          <li className="circle-item">
            <img src={greenCircle}/>
            <p>Esta região é segura!</p>
          </li>
          <li className="circle-item">
            <img src={yellowCircle}/>
            <p>Esta região não é tão segura, fique atento!</p>
          </li>
          <li className="circle-item">
            <img src={redCircle}/>
            <p>Esta região não é segura, evite-a se puder</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="map-reports-container">
      <h2>Depoimentos</h2>


      {reports.map((item, index) => {
        const dt = new Date(item.dataInclusao);
        const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
        const user = usuarios.find(t => t.id == item.idUsuario)
        console.log(usuarios)
        
        return (
          <ReportCard
            key={index}
            name={item.anonimo ? "Anônimo" : user.nome}
            date={format(dtDateOnly, "dd/MM/yyyy")}
            description={item.descricao}
        />
        );
      })}

    </div>
    <footer className="footer-alt">
        <p><a href="#">Contato</a></p>
        <p><a href="#">Sobre nós</a></p>
        <p><a href="#">Termos e condições</a></p>
    </footer>
    </>
    );
}
