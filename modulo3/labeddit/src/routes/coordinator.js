export const goToLoginPage = (navigate) => {
    navigate("/")
}
export const goToRegistrationPage = (navigate) => {
    navigate("/cadastro")
}
export const goToFeedPage = (navigate) => {
    navigate("/feed")
}
export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
}