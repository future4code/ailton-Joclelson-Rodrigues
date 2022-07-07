import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import axios from "axios";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
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

  const likeMatch = (id) => {
    const body = {
      id: id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joclelson/choose-person",
        body
      )
      .then((res) => {
        if (res.data.isMatch === true) {
          alert(`${profile.name} deu match com você`);
          getProfile();
        } else {
          alert(`${profile.name} deu um fora em você`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearMatch = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joclelson/clear"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dislikeMatch = () => {
    getProfile();
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
