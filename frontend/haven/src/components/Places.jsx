import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
    getZipCode
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css"
import { CEP_URL } from "../utils/requests";

export default function Places(prop) {
    const { 
        ready, 
        value, 
        setValue, 
        suggestions: { status, data }, 
        clearSuggestions 
    } = usePlacesAutocomplete();

    const handleSelect = async (val) => {
        setValue(val, false);
        clearSuggestions();

        const results = await getGeocode({address: val});
        console.log(results)
        const {lat, lng} = await getLatLng(results[0]);
        const zip = await getZipCode(results[0], true)

        /*if(zip === undefined){

            foreach
                
                const x = results[0].address_components

            axios.get(`${CEP_URL}/usuarios`)
                .then(response => {
                    setUsuarios(response.data);
                    console.log(response.data);
            
                });
        }*/

        prop.setCep(zip)
        prop.setLocation({lat, lng});
    }

    return <Combobox onSelect={handleSelect}>
        <ComboboxInput 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            disabled={!ready}
            className="combobox-input"
            placeholder="Busque um endereço"
        />
        <ComboboxPopover>
            <ComboboxList>
                {status === "OK" && 
                    data.map(({place_id, description}) => (
                        <ComboboxOption key={place_id} value={description}/>
                    ))}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
}