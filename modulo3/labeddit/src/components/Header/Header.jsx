import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHeader } from "./styled"

import logoReddit from "../../assets/img/logo-reddit.png"
import iconLogout from "../../assets/img/icon-logout.png"

const Header = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <ContainerHeader>
            <div>
                <img src={ logoReddit }  alt={"logo Reddit"}/>
                <h3 onClick={() => navigate("/")} >LabEddit</h3>
            </div>
            { token && <button onClick={logout}>Sair <img src={iconLogout} alt={"icon"} /></button>}
        </ContainerHeader>
    )
}
export default Header