import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete/Autocomplete';
import { GoogleMap } from '@react-google-maps/api';

const mapStyle = {
  width: '100%',
  height: '100vh'
};
const center = {
  lat: 0,
  lng: 0
}

function App() {

  return (
    <div class="map" id="map">

      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={2}
        center={center}
        options={{
          disableDefaultUI: true,
        }}>

        <Autocomplete/>
      
      </GoogleMap>

    </div>
  ) 
}

export default App;
