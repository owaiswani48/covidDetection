import React, { useState, useEffect } from "react";
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import  BedPage from "./components/pages/bed"
import Home from "./components/pages/home"
import OxygenPage from "./components/pages/oxygen"
import PlasmaPage from "./components/pages/plasma";
import MedicinePage from "./components/pages/medicine";
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import About from './components/pages/about';
import MapPage from './components/pages/mapPage';
import {auth} from './components/componentschat/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './components/componentschat/Chat'
import CovidQuestion from './components/question/question';
import SignIn from './components/componentschat/SignIn';
import Dashboard from "./components/pages/dashboard";
import ResourceLocation from "./components/pages/resourceLocation";
// import Dashboard from './components/pages/dashboard';

function App() {
  const [user] = useAuthState(auth)

  return (  
    <div className="App">
  <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route  path="/oxygen-detail" component={OxygenPage}/>
    <Route path="/bed-detail" component={BedPage}/>
    <Route path="/plasma-detail" component={PlasmaPage}/>
    <Route path="/medicine-detail" component={MedicinePage}/>
    <Route path="/about">
       <About/>
    </Route>
    <Route path={'/map'} component={MapPage}/>
    <Route path={'/resourceMap'} component={ResourceLocation}/>
    <Route path={'/doctor'} component={CovidQuestion}/>
    <Route path={'/covidDetection'} component={CovidQuestion}/>
    <Route path={'/DashboardCovid'} component={Dashboard}/>
    <Route path={'/drChat'}>
    {user ? <Chat/> : <SignIn />}
    </Route>

    </Switch>
<Footer/>
    </div>
  );
}

export default App;
