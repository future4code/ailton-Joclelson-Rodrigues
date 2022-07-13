import React from "react";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator"

function ApplicationFormPage() {
    const navigate = useNavigate()


    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}
export default ApplicationFormPage;