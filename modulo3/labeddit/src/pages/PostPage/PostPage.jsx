import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header"
import { useParams, useNavigate } from "react-router-dom";

const PostPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const params = useParams()

    return (
        <div>
            <Header />
            <button onClick={() => navigate(-1)}>voltar</button>
        </div>
    )
}
export default PostPage