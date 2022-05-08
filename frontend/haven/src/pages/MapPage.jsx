import React from 'react';
import { useLoadScript } from "@react-google-maps/api"
import Map from '../components/Map'
import ReportCard from '../components/ReportCard'
import {useState} from "react";

import greenCircle from '../assets/greenCircle.png'
import redCircle from '../assets/redCircle.png'
import yellowCircle from '../assets/yellowCircle.png'

export default function MapPage() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const [name, setName] = useState('');

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading Maps";

  


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <div className="map-super-container">
      <div>
        <h1 className='report-h1'>Haven</h1>
        {/*<form onSubmit={handleSubmit} className='form-report'>
          <div className='search-container map-page'>
            <input 
              placeholder='Endereço'
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button>Buscar</button>
          </div>
        </form>*/}
        <Map />
      </div>

      <div className="map-data-container">
        <h2>Dados</h2>
        <ul className="data-list">
          <li>teste 1</li>
          <li>teste 2</li>
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
      <ReportCard />
    </div>
    </>
    );
}
