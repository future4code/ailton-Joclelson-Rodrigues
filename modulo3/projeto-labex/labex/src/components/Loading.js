import React from "react";
import loadingIcon from "../assets/img/loading.gif"
import styled from "styled-components";

const Loading = () => {
    return (
        <div>
            <Img src={loadingIcon} alt={"loading"} />
        </div>
    )
}
export default Loading;

const Img = styled.img `
    width: 100px;
`;