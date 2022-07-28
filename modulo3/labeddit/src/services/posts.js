import axios from "axios";
import { BASE_URL } from "../constants/urls"

export const creatPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert(res.data)
        clear()
    })
    .catch((err) => {
        console.log(err)
        alert("Erro no Login")
    })
}

export const postVote = (id, body) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
}