import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CircleMarker, Marker,MapContainer, Popup, TileLayer } from "react-leaflet";
const position = [51.505, -0.09]
const redOptions = { color: 'green' }
function ResourceLocation({center}) {
    const [data, setdata]=useState([])
    useEffect(()=>{
        axios.get('https://con-45207-default-rtdb.firebaseio.com/contactForm.json')
        .then((response) => {
            
            const data= response.data
            // console.log(data.data,'data')
              let arr =[]
        if (data) {for (const key of Object.values(data)) {
               arr.push(key)
             console.log(key,"vakk");
            }}
            console.log(arr,'arr')
            
            
        })
        .finally(() => {
            // setLoading(false);
        });

    },[])
  return (
    <div style={{paddingTop:'8rem'}}>
        <h1>Resouce Location Finder </h1>
        <h4>Find the location of your resource</h4>
        <div className="map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
    </div>
  )
}

export default ResourceLocation