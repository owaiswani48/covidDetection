import React from 'react'
import Map from '../common/map'
const location = {
    address: 'Chest & Disease Hospital Srinagar',
    lat: 34.077830,
    lng: 74.830341,
  }
function MapPage() {
  return (
    <div style={{padding:'1rem', }}>
    <h1> Hospital Location and Client Location </h1>

    <div style={{padding:'1rem', border:'1px solid dashed black' ,borderRadius:'10px', boxShadow:'0 0 6px 1px grey', }}></div>
    <div style={{padding:'1rem', border:'1px solid dashed black' ,borderRadius:'10px', boxShadow:'0 0 6px 1px grey', }}></div>
    <div style={{padding:'1rem', border:'1px solid dashed black' ,borderRadius:'10px', boxShadow:'0 0 6px 1px grey', }}>


        <div style={{padding:'0.5rem', }}>
            <Map location={location} zoomLevel={13}/>
        </div>
    </div>
    </div>
  )
}

export default MapPage