import React , { useState } from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { Marker } from '@react-google-maps/api';
import './Autocomplete.css';


export default function App() {

  const [address,setAddress] = useState();
  const [coordinates, setCoordinates] = useState();


  const markers = [
    {
      lat: 37.772,
      lng: -122.214
    },
    {
      lat: 48.772,
      lng: -150.214
    }
  ]

  const handleSelect = async function(value) {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  /*const textMatch = function () {
    var textInput = document.getElementById('autocomplete-input');
    console.log(textInput)
  }*/


  return (
      
      <PlacesAutocomplete 
      value={address} 
      onChange={setAddress}
      onSelect={handleSelect}>

        {({getInputProps, suggestions, getSuggestionItemProps, textMatch}) => (

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
         
            <div class="makers" id="makers">
              <Marker position={coordinates}/>
              {markers.map(marker => 
                <Marker position={marker}/>
              )}
            </div>

          </div>
        )}
      </PlacesAutocomplete>
   
  );
}

