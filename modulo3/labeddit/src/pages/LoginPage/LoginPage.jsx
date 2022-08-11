import React from "react";
import logoLabEddit from "../../assets/img/logo-reddit.png"
import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { useNavigate } from "react-router-dom";
import { goToRegistrationPage } from "../../routes/coordinator"
import { goLogin } from "../../services/users"
import { ContainerLogo, ContainerForm, ContainerButton } from "./styled"

const LoginPage = () => {
    useUnprotectedPage()

    const { form, onChange, clean } = useForm({email: "", password: ""})

    const navigate = useNavigate()

    const submitForm = (event) => {
        event.preventDefault()
        goLogin(form, clean, navigate)
    }

    return (
        <div>
            <ContainerLogo>
                <img src={logoLabEddit} alt="logo LabEddit" />
                <h2>LabEddit</h2>
                <p>O projeto de rede social da Labenu</p>
            </ContainerLogo>
            <ContainerForm onSubmit={submitForm}>
                <div>
                    <input 
                        onChange={onChange}
                        value={form.email}
                        name="email"
                        type={"email"} 
                        required/>
                    <label>E-mail</label>
                </div>
                <div>
                    <input 
                        onChange={onChange}
                        value={form.password}
                        name="password"
                        type={"password"} 
                        required/>
                    <label>Senha</label>
                </div>
                <button type={"submit"}>
                    Continuar
                </button>
            </ContainerForm>
            <ContainerButton>
                <button onClick={() => goToRegistrationPage(navigate)}>Criar Conta</button>
            </ContainerButton>
        </div>
    )
}
export default LoginPage