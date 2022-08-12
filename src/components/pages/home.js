import React from 'react'
import Map from '../common/map'
import Banner from '../layout/header'
import ProvideData from '../layout/provide-data'
import SelectionCards from '../layout/selection-cards'
const location = {
    address: 'cd Hospital',
    lat: 34.077830,
    lng: 74.830341,
  }
function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <Banner/>
                <SelectionCards/>
                <ProvideData/>
            </div>
        </div>
    )
}

export default Home
