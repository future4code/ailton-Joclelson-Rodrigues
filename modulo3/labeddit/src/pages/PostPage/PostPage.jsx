import React, { useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header"
import useRequestData from "../../hooks/useRequestData";
import useForm from "../../hooks/useForm";
import { useParams, useNavigate } from "react-router-dom";
import { createComment } from "../../services/posts"
import { BASE_URL } from "../../constants/urls"
import { commentVote, commentVoteNega } from '../../services/comments'
import arrowUp from "../../assets/img/arrow-up.png"
import arrowLow from "../../assets/img/arrow-low.png"
import { H4, ContainerForm, ContainerButtonBack, ContainerComments, Comments } from "./styled"

const PostPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const { id } = useParams()

    const { form, onChange, clean } = useForm({body: ""})
    
    const [ getComments ] = useRequestData([], `${BASE_URL}/posts/${id}/comments`)

    const commentVotePositive = (id) => {
        commentVote(id)
    }

    const commentVoteNegative = (id) => {
        commentVoteNega(id)
    }

    const comments = getComments?.map((comment) => {
        return ( 
            <Comments>
                <p id="userp">{`Enviado por: ${comment.username}`}</p>
                <p>{comment.body}</p>
                <div id="arrow">
                    <img onClick={() => commentVotePositive(comment.id)} id="up" src={arrowUp}  alt={"arrow up"}/>
                    <p>{comment.voteSum}</p>
                    <img onClick={() => commentVoteNegative(comment.id)} src={arrowLow} alt={"arrow low"} />
                </div>
            </Comments>
        )
    })
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(id, form)
    }

    return (
        <div>
            <Header />
            <H4>Criar comentario</H4>
            <ContainerForm onSubmit={onSubmitForm}>
                <textarea rows={"4"}
                onChange={onChange}
                value={form.body}
                name={"body"}
                required/>
                <button>responder</button>
            </ContainerForm>
            <ContainerButtonBack>
                <button onClick={() => navigate(-1)}>VOLTAR</button>
            </ContainerButtonBack>
            <ContainerComments>
                { comments }
            </ContainerComments>
        </div>
    )
}
export default PostPage