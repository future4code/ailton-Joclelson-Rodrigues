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


export const postVotePositive = (id, vote) => {
    const body = {
        "direction": vote
    }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
}


export const postVoteNegative = (id, vote) => {
    const body = {
        "direction": vote
    }
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
}


export const createComment = (id, body) => {

    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}