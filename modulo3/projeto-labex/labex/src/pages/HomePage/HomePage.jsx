import React from "react";
import { useNavigate } from "react-router-dom";
import { goHomePage, goLoginPage } from "../../routes/coordinator";
import Button from "@mui/material/Button";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Página Inicial</h1>
      <Button onClick={() => goHomePage(navigate)} variant="contained">
        Ver Viagens
      </Button>
      <Button onClick={() => goLoginPage(navigate)} variant="contained">
        Area de Admin
      </Button>
    </div>
  );
}
export default HomePage;
