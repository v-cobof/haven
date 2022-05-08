import {useState, useMemo, useCallback, useRef} from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
} from "@react-google-maps/api";
import Places from "./Places";
import { ReactDOM } from "react";

//import Distance from "./distance"

/*
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
*/

export default function Map() {
    //const center = useMemo(() => ({lat: 43, lng: -80}), []);
    const [zoom, setZoom] = useState(9)
    const mapRef = useRef();
    const [center, setCenter] = useState({lat: -23.36, lng: -46.84})
    //const [location, setLocation] = useState();
    const [directions, setDirections] = useState();
    const [circ, setCirc] = useState(false);


    function setLocation(local) {
      //ReactDOM.unmountComponentAtNode(document.getElementById("id"))
      setCirc(true);
      setCenter(local);
      setZoom(16);   
    }

    const options = useMemo(
      () => ({
        disableDefaultUI: true,
      }),
      []
    );

    /*const options = {
      disableDefaultUI: true,
    }*/

    const onLoad = useCallback((map) => (mapRef.current = map), []);

    return (
        <>

          <form className='form-report'>
            <div className='search-container map-page'>
              <Places 
                setLocation={(position) => {
                  setLocation(position);
                }}
              />
              <button>Buscar</button>
            </div>
          </form>
          <div className="map-page-wrapper">
              <GoogleMap
                zoom={zoom}
                center={center}
                mapContainerClassName="map-container"
                options={options}
              >
                {circ && (<Circle id="circ" center={center} radius={500} options={colorOptions()}/>)}
              </GoogleMap>
          </div>
        </>
    )
}

function colorOptions(){
  let safety = 0;
  let color;
  if(safety === 0){
    color = "#B6E3A3"
  }
  else if (safety === 1) {
    color = "#EBDE83"
  }
  else if (safety === 2) {
    color = "#E79E8E"
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


/*const middleSafeOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: ,
  fillColor: "#EBDE83",
};

const unsafeOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "",
  fillColor: "#E79E8E",
};*/