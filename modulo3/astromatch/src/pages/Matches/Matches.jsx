import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Pagina, Header, ContainerPai, ContainerMatch } from "./styled.js";

export default function Matches(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatchs();
  }, []);

  const getMatchs = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joclelson/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Pagina>
      <h3>
        astro<span>match</span>
      </h3>
      <Header>
        <div>
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            onClick={props.changeHome}
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faComments} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </Header>
      <ContainerPai>
        {matches.map((match) => {
          return (
            <ContainerMatch key={match.id}>
              <img src={match.photo} alt={match.photo_alt} />
              <p>{match.name}</p>
            </ContainerMatch>
          );
        })}
      </ContainerPai>
    </Pagina>
  );
}
