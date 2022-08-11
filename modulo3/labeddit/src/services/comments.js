import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const commentVote = (id) => {
    const body = {
        "direction": 1
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const commentVoteNega = (id) => {
    const body = {
        "direction": -1
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}