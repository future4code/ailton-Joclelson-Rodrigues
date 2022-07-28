import axios from "axios";
import { BASE_URL } from "../constants/urls"

export const goLogin = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        navigate("/feed")
    })
    .catch((err) => {
        alert("Erro no Login")
    })
}

export const goSignUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        navigate("/feed")
    })
    .catch((err) => {
        alert("Erro ao Cadastrar")
    })
}