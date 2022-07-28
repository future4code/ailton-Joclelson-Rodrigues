import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header"
import useFrom from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { goSignUp } from "../../services/users"
import { H1, ContainerForm, Label } from "./styled"

const RegistrationPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    const { form, onChange, clean  } = useFrom({username: "", email: "", password: ""})

    const submitForm = (event) => {
        event.preventDefault()
        goSignUp(form, clean, navigate)
    }

    return (
        <div>
            <Header/>
            <H1> Olá, boas vindas ao LabEddit ;) </H1>
            <ContainerForm onSubmit={submitForm}>
                <div>
                    <input 
                    onChange={onChange}
                    value={form.username}
                    name="username"
                    type="text" 
                    required />
                    <label>Nome Usuário</label>
                </div>
                <div>
                    <input 
                    onChange={onChange}
                    value={form.email}
                    name="email"
                    type="text" 
                    required />
                    <label>E-mail</label>
                </div>
                <div>
                    <input 
                    onChange={onChange}
                    value={form.password}
                    name="password"
                    type={"password"} 
                    required />
                    <label>Senha</label>
                </div>
                <p>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Política de Privacidade</a></p>
                <Label>
                    <input type={"checkbox"}/>
                    <span className="check" />
                    Eu concordo em receber emails sobre coisas legais no LabEddit
                </Label>
                <button>Cadastrar</button>
            </ContainerForm>
        </div>
    )
}
export default RegistrationPage