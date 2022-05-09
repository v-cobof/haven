import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css"

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