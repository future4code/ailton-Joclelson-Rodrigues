import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator"

function CreateTripPage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Criar Viagem</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}
export default CreateTripPage;