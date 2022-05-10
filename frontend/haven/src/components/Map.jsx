import {useState, useMemo} from "react";
import {
    GoogleMap,
    Circle,
} from "@react-google-maps/api";
import Places from "./Places";


export default function Map(prop) {

    const [zoom, setZoom] = useState(9)
    const [center, setCenter] = useState({lat: -23.36, lng: -46.84})


    const [circ, setCirc] = useState(false);


    function setLocation(local) {

      setCirc(true);
      setCenter(local);
      console.log(local)
      setZoom(16);
      //setCep()   
    }

    const options = useMemo(
      () => ({
        disableDefaultUI: true,
      }),
      []
    );

    return (
        <>

          <form className='form-report'>
            <div className='search-container map-page'>
              <Places
                setCep={prop.setCep} 
                setLocation={(position) => {
                  setLocation(position);
                }}
              />
            </div>
          </form>
          <div className="map-page-wrapper">
              <GoogleMap
                zoom={zoom}
                center={center}
                mapContainerClassName="map-container"
                options={options}
              >
                {circ && (<Circle id="circ" center={center} radius={500} options={colorOptions(prop.nivel)}/>)}
              </GoogleMap>
          </div>
        </>
    )
}

function colorOptions(safety){
  let color = "#fff"
  if(safety === "Baixo"){
    color = "#B6E3A3"
  }
  else if (safety === "Medio") {
    color = "#EBDE83"
  }
  else if (safety === "Alto") {
    color = "#EC735A"
  }

  return {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    fillOpacity: 0.5,
    strokeColor: color,
    fillColor: color,
  }
};