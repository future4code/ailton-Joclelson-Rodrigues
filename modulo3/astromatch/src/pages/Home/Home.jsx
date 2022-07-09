import React, { useState } from "react";
import { Container, Header, PhotoProfile, ButtonsMatch, Match } from "./styled.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import matchIcon from "../../img/match-tinder.gif"
import {
  faFireFlameCurved,
  faComments,
  faUser,
  faXmark,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Home(props) {

  const [animation, setAnimation] = useState("")

  return (
    <Container>
      <h3>
        astro<span>match</span>
      </h3>
      <Header>
        <div>
          <FontAwesomeIcon icon={faFireFlameCurved} />
        </div>
        <div>
          <FontAwesomeIcon icon={faComments} onClick={props.changeMatch} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </Header>
      
      {props.profile && 
      <PhotoProfile photo={props.profile.photo} animation={animation}>
        {/* <div>
          {props.isMatch === true && <Match src={matchIcon} alt="tinder" /> }
        </div> */}
        <div className="profile">
          <div className="profile-info">
            <h2>{props.profile.name},</h2>
            <h3>{props.profile.age}</h3>
          </div>
          <p>{props.profile.bio}</p>
        </div>
      </PhotoProfile> }
      <ButtonsMatch>
        <div>
          <FontAwesomeIcon icon={faXmark} 
          onClick={() => {props.dislikeMatch(setAnimation)}} />
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowsRotate} onClick={props.clearMatch} />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => {
              setAnimation("right")
              props.likeMatch(props.profile.id, setAnimation) 
            }}
          />
        </div>
      </ButtonsMatch>
    </Container>
  );
}
