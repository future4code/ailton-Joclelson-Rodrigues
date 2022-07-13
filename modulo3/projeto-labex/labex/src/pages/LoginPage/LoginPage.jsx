import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ContainerDad, ContainerLogin, ContainerButtons } from "./styled";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

function LoginPage() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleChangPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const goAdmHomePage = () => {
    const body = {
      email: inputEmail,
      password: inputPassword,
    };
    axios
      .post(`${BASE_URL}/joclelson-rodrigues-ailton/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerDad>
      <ContainerLogin>
        <h1>Pagina Login</h1>
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          size="small"
          onChange={handleChangeEmail}
          required
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          type="password"
          variant="outlined"
          size="small"
          onChange={handleChangPassword}
          required
        />
      </ContainerLogin>
      <ContainerButtons>
        <Button
          onClick={() => goBack(navigate)}
          variant="contained"
          startIcon={<ArrowBackIcon />}
        >
          Voltar
        </Button>
        <Button
          onClick={() => goAdmHomePage()}
          variant="contained"
          endIcon={<AccountCircleIcon />}
        >
          Entrar
        </Button>
      </ContainerButtons>
    </ContainerDad>
  );
}
export default LoginPage;
