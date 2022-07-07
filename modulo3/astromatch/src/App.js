import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Matches from './pages/Matches/Matches'
import axios from 'axios';
import './App.css';

function App() {
  const [screen, setScreen] = useState("home")
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
    .then((res) => {setProfile(res.data.profile)})
    .catch((err) => {alert(err.message)})
  }

  const changeMatch = () => {
    setScreen("match")
  }

  const changeHome = () => {
    setScreen("home")
  }

  const changeScreen = () => {
    switch(screen){
      case "home":
        return <Home changeMatch={changeMatch}
        profile={profile}/>
      case "match":
        return <Matches changeHome={changeHome}/>
      default: 
        return <Home />
    }
  }

  return (
    <div className="App">
      {changeScreen()}
    </div>
  );
}

export default App;