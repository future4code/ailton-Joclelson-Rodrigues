import React from "react";
import Header from "../../components/Header/Header"
import error from '../../assets/img/error.svg'
import { ErroPage } from "./styled"

const ErrorPage = () => {
  return(
    <ErroPage>
        <Header />
        <img src={error} alt={"erro img"} />
        <h3>Página não encontrada!</h3>
    </ErroPage>
  ) 
};
export default ErrorPage;
