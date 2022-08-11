import React, { useEffect, useState } from "react";
import axios from "axios"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            alert("Erro na Requisição")
        })

    }, [url])

    return [ data, isLoading ]
}
export default useRequestData