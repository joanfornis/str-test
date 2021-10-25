import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete';
import { GoogleMap } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh'
};
const center = {
  lat: 0,
  lng: -180
}


function App() {


  return (
    <div class="map" id="map">

      

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
        options={{
          disableDefaultUI: true,
        }}
      >

      <Autocomplete/>

      
      </GoogleMap>
    

      
    </div>
  ) 
}

export default App;
