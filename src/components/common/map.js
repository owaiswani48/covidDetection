import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text" style={{color:"red", fontWeigth:"bold", textShadow:"1px 1px 5px green"}}>{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">CHECK THE Location</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
        <LocationPin
          lat={34.03961941016442}
          lng={74.80951775121798}
          text={'Florence Hospital Chanpora, Srinagar'}
        />
        <LocationPin
          lat={34.07013073738277}
          lng={ 74.80093101719113}
          text={'Shifa Hospital Magarmal Bagh'}
        />
         <LocationPin
          lat={34.08432069967846}
          lng={74.82200822337522}
          text={'Khyber Hospital,Khayam'}
        />
          <LocationPin
          lat={34.097780738745826}
          lng={74.8211767147806}
          text={'JLNM Government Hospital,Rainawari'}
        />
          <LocationPin
          lat={34.08643922000835}
          lng={74.79738588025607}
          text={'SMHS Karan Nagar,Srinagar '}
        />
          <LocationPin
          lat={34.112094233589566}
          lng={74.72540968109074}
          text={'Noora Hospital'}
        />
        <LocationPin
          lat={34.135635534839636}
          lng={74.79991583461025}
          text={'Sher-i-Kashmir Institute of Medical Sciences hospital,Soura'}
        />
         <LocationPin
          lat={34.0845202}
          lng={74.7618448}
          text={'JVC Hospital Bemina Srinagar'}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map