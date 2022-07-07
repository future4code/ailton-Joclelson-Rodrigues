import React from "react";
import "./styled.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faComments, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Home(props) {
    return(
        <div className="pai">
            <h2>astro<span>match</span></h2>
            <div className="header">
                <button onClick={props.changeMatch}><FontAwesomeIcon icon={faFire} /></button>
                <button><FontAwesomeIcon icon={faComments} /></button>
                <button><FontAwesomeIcon icon={faUser} /></button>
            </div>
            <div className="profile">
                <img src={props.profile.photo} alt={props.profile.photo_alt} />
                <h2>{props.profile.name},</h2><h3>{props.profile.age}</h3>
                <p>{props.profile.bio}</p>
            </div>
            <div>
                <button>❌</button>
                <button>❤️</button>
                
                
            </div>
        </div>
    )
}
