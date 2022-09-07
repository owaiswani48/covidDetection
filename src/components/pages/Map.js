import { Marker } from "leaflet";
import React, { useEffect } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import axios from 'axios'


import "./Map.css";
const redOptions = { color: 'red' }
// import { showDataOnMap } from "./util";
const data = [
  {
    name: 'DELHI',
    coordinates: {
      langitude:'28.704060',
      latitude: '77.102493',
    },
  },
  {
    name: 'MUMBAI',
    coordinates: {
      langitude: '19.075983',
      latitude: '72.877655',
    },
  },
  {
    name: 'SRINAGAR',
    coordinates: {
      langitude: '34.071751',
      latitude: '74.804321',
    },
  },
    {
    name: 'jammu',
    coordinates: {
      langitude: '32.7185614',
      latitude: '74.8580917',
    },
  },
      {
    name: 'UP',
    coordinates: {
      langitude: '27.1303344',
      latitude: '80.859666',
    },
  },
 
      {
    name: 'hyderabad',
    coordinates: {
      langitude: '12.9665538',
      latitude: '77.6141032',
    },
  },

     {
    name: 'India',
    coordinates: {
      langitude: '20.5937',
      latitude: '74.804321',
    },
  },
{
    name: 'Pulwama',
    coordinates: {
      langitude: '33.8982935',
      latitude: '74.8963409',
    },
  },
{
    name: 'Budgam',
    coordinates: {
      langitude: '33.9099319',
      latitude: '74.6291443',
    },
  },
{
    name: 'Bihar',
    coordinates: {
      langitude: '25.6440845',
      latitude: '85.906508',
    },
  },
{
    name: 'west bengal',
    coordinates: {
      langitude: '22.222454002822857',
      latitude: '88.60914471875003',
    },
  },
{
    name: 'Nagpur',
    coordinates: {
      langitude: '21.168489689148377',
      latitude: '79.02906659375003',
    },
  },
{
    name: 'LEH',
    coordinates: {
      langitude: '33.26345532570898',
      latitude: '77.90846112500006',
    },
  },
//  {
//     name: 'lalbazar',
//     coordinates: {
//       langitude: '34.1374',
//       latitude: '74.97681',
//     },
//   },
  {
    name: 'hyderpora',
    coordinates: {
      langitude: '34.0482573',
      latitude: '74.7834355',
    },
  },
{
    name: 'lalchowk',
    coordinates: {
      langitude: '34.069832',
      latitude: '74.809036',
    },
  },
{
    name: 'soura',
    coordinates: {
      langitude: '34.1386249',
      latitude: '74.799533',
    },
  },
  {
    name: 'Nowhata',
    coordinates: {
      langitude: '34.079427',
      latitude: '74.8258562',
    },
  },
{
    name: 'Batwara',
    coordinates: {
     langitude: '34.058261',
            latitude: '74.8521752',
    },
  },
{
    name: 'Batmaloo',
    coordinates: {
      langitude:'34.070411295499376',
         latitude :'74.78869911677242',
      
    },
  },
{
    name: 'Jawahar nagar',
    coordinates: {
      
     langitude: '34.057879',
    latitude: '74.8166982',

    },
  },
  { name:'Nishat',
    coordinates: {
     
      langitude :'34.1286093',
  latitude :'74.8801088',
    },
  },

{
    name: 'sonwar',
    coordinates: {
      langitude :'34.084316445153924',
     latitude :'74.83410355097652',
    },
  },
{
    name: 'Nawakadal',
    coordinates: {
      langitude :'34.095802744761144',
     latitude :'74.79642387873531',
    },
  },
{
    name: 'Hazratbal',
    coordinates: {
              langitude :'34.11572847600224',
            latitude : '74.84654900080562',
     
    },
  },
{
    name: 'Hawal',
    coordinates: {
    langitude :'34.11004239246412',
   latitude :'74.81122967249752',

    },
  },
{
    name: 'Rajbagh',
    coordinates: {
      langitude :'32.3672831',
     latitude : 75.537489,          
},
  },


];
function Map({ countries, casesType, center, zoom }) {
  useEffect(()=>{

    axios.get('https://con-45207-default-rtdb.firebaseio.com/location.json')
    .then((response) => {
      console.log(response.data)
     let ab = Object.values(response.data)
      ab.forEach(element => {
        data.push({
          name: 'hotspot',
          coordinates: {
            langitude :element.langitude,
           latitude : element.latitude,          
      },
        })
        console.log('dta',data)
      })
    })
    .catch((e)=>console.log(e))
    .finally(() => {
    });
    },[])
    
  return (
    <div className="map">
      <MapContainer  center={[32.3672831,75.537489]} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
          {data.map((i)=>(<CircleMarker center={[i?.coordinates?.langitude,i?.coordinates?.latitude]} pathOptions={redOptions} radius={20}>
            <Popup>{i?.name} {i.coordinates.name==='hotspot'&& console.log("found")}</Popup>
          </CircleMarker>))}
      
      </MapContainer>
      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>



    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
    </Marker>
  </MapContainer> */}
    </div>
  );
}

export default Map;
