import React from "react";
import { useNavigate } from "react-router-dom";
import { goHomePage, goLoginPage } from "../../routes/coordinator";
import Button from "@mui/material/Button";
import { ContainerPage, ContainerImg, ContainerAdm } from "./styled";
import walpperInic from "../../assets/img/walpper.jpg"
import logoLabeX from "../../assets/img/LabeX.png"

function HomePage() {
  const navigate = useNavigate();

  return (
    <ContainerPage>
      <ContainerImg walpperInic={walpperInic}>
      </ContainerImg>
      <ContainerAdm>
        <img src={logoLabeX} alt="logo labex" />
        <Button
          onClick={() => goHomePage(navigate)}
          size="large"
          variant="contained"
        >
          Ver Viagens
        </Button>
        <Button
          onClick={() => goLoginPage(navigate)}
          size="large"
          variant="contained"
        >
          Area de Admin
        </Button>
      </ContainerAdm>
    </ContainerPage>
  );
}
export default HomePage;
