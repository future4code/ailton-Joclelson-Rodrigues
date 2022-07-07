import React from "react";

export default function Matches(props) {
    return(
        <div>
            <div>
                <h2>astro<span>match</span></h2>
                <button onClick={props.changeHome}>Home</button>
            </div>
            <div>
                <img src="" alt="foto do perfil" />
                <p>Nome</p>
            </div>
        </div>
    )
}