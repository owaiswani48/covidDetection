import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CircleMarker, Marker,MapContainer, Popup, TileLayer } from "react-leaflet";
const position = [51.505, -0.09]
const redOptions = { color: 'green' }
function ResourceLocation({center}) {
    const [data, setdata]=useState([])
    useEffect(()=>{
      console.log('a')
        axios.get('https://con-45207-default-rtdb.firebaseio.com/contactForm.json')
        .then((response) => {
            
            const data= response.data
            // console.log(data.data,'data')
              let arr =[]
        if (data) {for (const key of Object.values(data)) {
               arr.push(key) 
            }}
            let cordsFil=[]
          let filterd = arr.filter((i)=>i.coords)
          filterd.forEach((i)=>{ cordsFil.push({coords:i.coords,
                                              name:i.name}) 
                                            console.log(i.coords,'l')
                                            })
         let getLocArr=cordsFil.filter((i)=>typeof(i.coords)!=='string')
         cordsFil=[]
        //  getLocArr.forEach((i)=>{
        //   cordsFil.pish
        //  })
          console.log(getLocArr,"hhh")
          setdata(getLocArr)
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
        <MapContainer center={[34.1180416,74.8191744]} zoom={8} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
          {data.map((i)=>(<CircleMarker center={i.coords.reverse()} pathOptions={redOptions} radius={20}>
            <Popup>{i?.name}</Popup>
          </CircleMarker>))}
  </MapContainer>
    </div>
    </div>
  )
}

export default ResourceLocation