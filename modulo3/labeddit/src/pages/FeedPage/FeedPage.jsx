import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header"
import useRequestData from "../../hooks/useRequestData";
import useForm from "../../hooks/useForm";
import Loading from "../../components/Loading/Loading"
import { useNavigate } from "react-router-dom";
import { goToPostPage } from '../../routes/coordinator'
import { BASE_URL } from "../../constants/urls"
import { creatPost, postVote } from "../../services/posts"

import arrowUp from "../../assets/img/arrow-up.png"
import arrowLow from "../../assets/img/arrow-low.png"
import comment from "../../assets/img/comment.png"

import { ContainerPost, ContainerFeed, PostCard } from "./styled"

const FeedPage = () => {
    useProtectedPage()

    const navigate = useNavigate()

    const { form, onChange, clean } = useForm({title: "", body: ""})
    
    const [feedPost, isLoading ]  = useRequestData([], `${BASE_URL}/posts`)

    const onSubmitForm = (event) => {
        event.preventDefault()
        creatPost(form, clean)
    }

    const votePositive = (id, vote) => {
        const body = {
            "direction": vote
        }
        postVote(id, body)
        console.log(id , body)
    }

    const goToDetails = (id) => {
        goToPostPage(navigate, id)
    }

    const feedPostCard = feedPost.map((post) => {
        return (
            <PostCard key={post.id}>
                <p id="color-name">{`Enviado por: ${post.username}`}</p>
                <p>{`${post.body}`}</p>
                <div>
                    <div id="arrow">
                        <img onClick={() => votePositive(post.id, 1)} id="up" src={arrowUp}  alt={"arrow up"}/>
                        <p>{post.voteSum}</p>
                        <img src={arrowLow} alt={"arrow low"} />
                    </div>
                    <div onClick={() => goToDetails(post.id)} id="comment">
                        <img src={comment} />
                        <p>{post.commentCount}</p>
                    </div>
                </div>
            </PostCard>
        )
    })

    return (
        <div>
            <Header />
            <ContainerPost>
                <input 
                onChange={onChange}
                value={form.title}
                name="title"
                required
                placeholder="Titulo" />
                
                <textarea 
                onChange={onChange}
                value={form.body}
                name="body"
                required
                placeholder="Escreva seu post..." 
                rows={"4"} 
                cols={"4"} />
                <button onClick={onSubmitForm}>Postar</button>
            </ContainerPost>
            <ContainerFeed>
                { !isLoading ? feedPostCard : <Loading/> }
            </ContainerFeed>
        </div>
    )
}
export default FeedPage