import React , { useState } from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { Marker } from '@react-google-maps/api';
import './Autocomplete.css';

const markers = []

function Autocomplete() {

  const [address,setAddress] = useState("");
  const [coordinates, setCoordinates] = useState("");

  const handleSelect = async function(value) {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    markers.push(latLng)
  };

  return (
      
      <PlacesAutocomplete 
      value={address} 
      onChange={setAddress}
      onSelect={handleSelect}>

        {({getInputProps, suggestions, getSuggestionItemProps}) => (

          <div class="autocomplete-container">
            <input class="autocomplete-input" id="autocomplete-input" {...getInputProps({placeholder: "Introduce tu búsqueda"}) }/>
            <div class="autocomplete-select">
              {suggestions.map(suggestion => {
                return (
                  <div class="autocomplete-option" {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
         
              <Marker position={coordinates}/>
              {markers.map(marker => 
                <Marker position={marker}/>
              )}

          </div>
        )}
      </PlacesAutocomplete>
   
  );
}

export default Autocomplete;

