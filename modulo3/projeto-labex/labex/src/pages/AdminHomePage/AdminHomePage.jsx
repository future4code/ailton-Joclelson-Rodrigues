import React from "react";
import { useNavigate } from "react-router-dom";
import { goCreateTripPage, goBack } from "../../routes/coordinator"

function AdminHomePage() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Painel Administrativo</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goCreateTripPage(navigate)}>Criar Viagem</button>
            <button>Sair</button>
        </div>
    )
}

export default AdminHomePage;