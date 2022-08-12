import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
 export const data = [
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
    {
      name: 'rajbagh',
      coordinates: {
        langitude: '74.8287737',
        latitude: '34.0662057',
      },
    },
    {
      name: 'lalbazar',
      coordinates: {
        langitude: '74.97681',
        latitude: '34.1374 ',
      },
    },
    {
      name: 'hyderpora',
      coordinates: {
        langitude: '74.7834355',
        latitude: '34.0482573',
      },
    },
  {
      name: 'lalchowk',
      coordinates: {
        langitude: '74.809036',
        latitude: '34.069832',
      },
    },
  {
      name: 'soura',
      coordinates: {
        langitude: '74.799533',
        latitude: '34.1386249',
      },
    },
    {
      name: 'nowhata',
      coordinates: {
        langitude: '74.8258562',
        latitude: '34.079427',
      },
    },
  {
      name: 'batwara',
      coordinates: {
       longitude: '74.8521752',
              latitude: '34.058261',
      },
    },
  {
      name: 'batmaloo',
      coordinates: {
           latitude :'34.070411295499376',
        longitude:'74.78869911677242',
      },
    },
  {
      name: 'jawahar nagar',
      coordinates: {
        
       longitude: '74.8166982',
      latitude: '34.057879',
  
      },
    },
    { name:'nishat',
      coordinates: {
       
        longitude :'74.8801088',
    latitude :'34.1286093',
      },
    },
  
  {
      name: 'sonwar',
      coordinates: {
        longitude :'74.83410355097652',
       latitude :'34.084316445153924',
      },
    },
  {
      name: 'nawakadal',
      coordinates: {
        longitude :'74.79642387873531',
       latitude :'34.095802744761144',
      },
    },
  {
      name: 'hazratbal',
      coordinates: {
                longitude :'74.84654900080562 ',
              latitude : '34.11572847600224',
       
      },
    },
  {
      name: 'hawal',
      coordinates: {
      longitude :'74.81122967249752',
     latitude :'34.11004239246412',
  
      },
    },
  {
      name: 'rajbagh',
      coordinates: {
        langitude :'74.80989929682613',
       latitude : '34.0826347965343',          
  },
    },
  
  
  
  ];