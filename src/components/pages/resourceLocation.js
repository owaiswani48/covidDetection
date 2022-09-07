import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CircleMarker, Marker,MapContainer, Popup, TileLayer } from "react-leaflet";
const position = [51.505, -0.09]
const redOptions = { color: 'green' }
function ResourceLocation({center}) {
    const [data, setdata]=useState([])
    const [loading, setLoading]= useState(false)
    useEffect(()=>{
      setLoading(true)
      console.log('a')
        axios.get('https://con-45207-default-rtdb.firebaseio.com/contactForm.json')
        .then((response) => {
            setLoading(false)
            const data= response.data
            // console.log(data.data,'data')
              let arr =[]
        if (data) {for (const key of Object.values(data)) {
               arr.push(key) 
            }}
            let cordsFil=[]
          let filterd = arr.filter((i)=>i.coords)
          filterd.forEach((i)=>{ cordsFil.push({coords:i.coords,
                                              name:i.name,
                                              cat:i.cat
                                            }) 
                                            
                                            })
         let getLocArr=cordsFil.filter((i)=>typeof(i.coords)!=='string' && i.cat!==undefined)
         console.log(cordsFil)
        //  getLocArr.forEach((i)=>{
        //   cordsFil.pish
        //  })
          console.log(getLocArr,"hhh")
          setdata(getLocArr)
        })
        .finally(() => {
            setLoading(false);
        });

    },[])
  return (
    <div style={{paddingTop:'8rem'}}>
    
        <h1>Resouce Location Finder </h1>
        <h4>Find the location of your resource</h4>
        <p style={{width:'fit-content' , margin:'1rem auto', border:'1px solid grey'}}><div style={{width:'1.3rem', height:'1.3rem', borderRadius:'50%', background:'#095D29'}}></div> dark green color means all the resource are available</p>
        <p style={{width:'fit-content' , margin:'1rem auto', border:'1px solid grey'}}><div style={{width:'1.3rem', height:'1.3rem', borderRadius:'50%', background:'#0E8B3E'}}></div>mid green color means few of the resource are available</p>
        <p style={{width:'fit-content' , margin:'1rem auto', border:'1px solid grey'}}><div style={{width:'1.3rem', height:'1.3rem', borderRadius:'50%', background:'#36A661'}}></div>light  green color means single  resource is available</p>
        <div className="map">
       {loading ? <h1>LOADING MAP CONTENT & RESOURCE Location DATA</h1> :<MapContainer center={[34.1180416,74.8191744]} zoom={8} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
          {data.map((i)=>(<CircleMarker center={i.coords.reverse()} pathOptions={redOptions} radius={20}>
            <Popup>{i?.name} resources:- {i.cat ===undefined ? "all resource":i.cat}--</Popup>
          </CircleMarker>))}
  </MapContainer>}
    </div>
    </div>
  )
}

export default ResourceLocation