export const goToLoginPage = (Navigate) => {
    Navigate("/")
}
export const goToRegistrationPage = (Navigate) => {
    Navigate("/cadastro")
}
export const goToFeedPage = (Navigate) => {
    Navigate("/feed")
}
export const goToPostPage = (Navigate, id) => {
    Navigate(`/post/${id}`)
}