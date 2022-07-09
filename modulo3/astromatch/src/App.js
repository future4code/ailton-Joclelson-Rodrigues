import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import axios from "axios";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [profile, setProfile] = useState({});
  const [isMatch, setIsMatch] = useState("")

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    await axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joclelson/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const likeMatch  = async (id, setAnimation) => {
    try {
      const body = {
        id: id,
        choice: true,
      }; 
      const res = await axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joclelson/choose-person",
        body
      )
      if (res.data.isMatch === true) {
        alert(`${profile.name} deu match com você`);
        setIsMatch(res.data.isMatch)
        getProfile();
        setAnimation("")
      } else {
        alert(`${profile.name} deu um fora em você`);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const clearMatch = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joclelson/clear"
      )
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const dislikeMatch = async (setAnimation) => {
    setAnimation("left")
    await getProfile();
    setAnimation("")
  };

  const changeMatch = () => {
    setScreen("match");
  };

  const changeHome = () => {
    setScreen("home");
  };

  const changeScreen = () => {
    switch (screen) {
      case "home":
        return (
          <Home
            changeMatch={changeMatch}
            likeMatch={likeMatch}
            clearMatch={clearMatch}
            dislikeMatch={dislikeMatch}
            profile={profile}
            isMatch={isMatch}
          />
        );
      case "match":
        return <Matches changeHome={changeHome} />;
      default:
        return <Home />;
    }
  };

  return <div className="App">{changeScreen()}</div>;
}

export default App;
