import React from "react";
import { ContainerHeader } from "./styled"

import logoReddit from "../../assets/img/logo-reddit.png"

const Header = () => {
    return (
        <ContainerHeader>
                <img src={ logoReddit }  alt={"logo Reddit"}/>
                <h3>LabEddit</h3>
        </ContainerHeader>
    )
}
export default Header