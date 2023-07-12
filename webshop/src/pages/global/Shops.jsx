import { useState } from 'react';
import Map from '../../components/Map';
import Button from '@mui/material/Button';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div className='center'>
    <Button onClick={() => setCoordinates({lngLat: [58.8858, 25.6539], zoom: 7})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>
    
    
    <Button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4412, 24.7349], zoom: 13})}>Balti jaama turg</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3779, 26.7306], zoom: 13})}>Tasku</Button>

    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;