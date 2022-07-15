import React from "react";
import axios from "axios";

import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import { ContainerDad, ContainerLogin, ContainerButtons } from "./styled";

import logoLabeX from "../../assets/img/LabeX.png";


function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })

  const goAdmHomePage = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/joclelson-rodrigues-ailton/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err);
      });
    cleanFields();
  };

  return (
    <ContainerDad>
      <form onSubmit={goAdmHomePage}>
        <ContainerLogin>
          <img src={logoLabeX} alt={"logo labex"} />

          <input
            onChange={onChange}
            name={"email"}
            value={form.email}
            placeholder="E-mail"
            required
            type={"email"}
          />

          <input
            onChange={onChange}
            name={"password"}
            value={form.password}
            placeholder="Senha"
            required
          />
        </ContainerLogin>
        <ContainerButtons>
          <button>ENTRAR</button>
        </ContainerButtons>
      </form>
          <button onClick={() => goBack(navigate)}>Voltar</button>
    </ContainerDad>
  );
}
export default LoginPage;
