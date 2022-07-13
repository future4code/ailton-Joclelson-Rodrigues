import React from 'react'
import { useNavigate } from "react-router-dom";
import { goAdmHomePage, goBack } from "../../routes/coordinator"
import TextField from '@mui/material/TextField';

function LoginPage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Pagina Login</h1>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Senha" type="password" variant="outlined" />

            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goAdmHomePage(navigate)}>Entrar</button>
        </div>
    )
}
export default LoginPage;