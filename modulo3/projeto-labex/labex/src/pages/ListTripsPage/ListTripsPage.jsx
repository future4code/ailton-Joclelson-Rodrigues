import React from "react";
import { useNavigate } from "react-router-dom"
import { goBack, goAppFormPage } from "../../routes/coordinator"

function ListTripsPage() {
    const navigate = useNavigate()



    return (
        <div>
            <h1>Lista de Viagem</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goAppFormPage(navigate)}>Inscrever-se</button>
        </div>
    )
}
export default ListTripsPage;