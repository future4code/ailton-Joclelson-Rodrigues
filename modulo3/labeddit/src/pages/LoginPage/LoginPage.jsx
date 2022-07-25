import React from "react";
import logoLabEddit from "../../assets/img/logo-reddit.png"
import { ContainerLogo, ContainerForm } from "./styled"

const LoginPage = () => {
    return (
        <div>
            <ContainerLogo>
                <img src={logoLabEddit} alt="logo LabEddit" />
                <h2>LabEddit</h2>
                <p>O projeto de rede social da Labenu</p>
            </ContainerLogo>
            <ContainerForm>
                <div>
                    <input required/>
                    <label>E-mail</label>
                </div>
                <div>
                    <input required/>
                    <label>Senha</label>
                </div>
                <button>
                    Continuar
                </button>
            </ContainerForm>
        </div>
    )
}
export default LoginPage