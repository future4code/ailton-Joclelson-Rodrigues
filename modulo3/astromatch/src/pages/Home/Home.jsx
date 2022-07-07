import React from "react";
import { Container, Header, PhotoProfile, ButtonsMatch } from "./styled.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faComments,
  faUser,
  faXmark,
  faArrowsRotate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Home(props) {
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
      <PhotoProfile photo={props.profile.photo}>
        <div className="profile">
          <div className="profile-info">
            <h2>{props.profile.name},</h2>
            <h3>{props.profile.age}</h3>
          </div>
          <p>{props.profile.bio}</p>
        </div>
      </PhotoProfile>
      <ButtonsMatch>
        <div>
          <FontAwesomeIcon icon={faXmark} onClick={props.dislikeMatch} />
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowsRotate} onClick={props.clearMatch} />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => props.likeMatch(props.profile.id)}
          />
        </div>
      </ButtonsMatch>
    </Container>
  );
}
