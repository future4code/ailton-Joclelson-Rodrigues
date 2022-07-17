import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setData(res.data.trips)
            setRemoveLoading(true)
        })
        .catch((err) => {setError(err)})
    }, [url])

    return [ data, removeLoading ]
}