import React from "react";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls"
import { Header, ContainerForm, ButtonBack } from "./styled"

function CreateTripPage() {
  const navigate = useNavigate();

  useProtectedPage();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0,
  });

  const createTrips = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/trips`, form, {
        headers: {
            auth: token
        }
    })
    .then((res) => {alert("Viagem Criada com sucesso!")})
    .catch((err) => {alert(err.message)})
    cleanFields()
  }

  return (
    <div>
      <Header>
        <h2>Criar Viagem</h2>
      </Header>
      <ContainerForm onSubmit={createTrips}>
        <input
          onChange={onChange}
          name="name"
          value={form.name}
          placeholder="Nome"
          pattern="^.{5,}"
          title="O nome deve ter no minimo 5 letras"
        />
        <input
          onChange={onChange}
          name="planet"
          value={form.planet}
          placeholder="Escolha um Planeta"
        />
        <input
          onChange={onChange}
          name="date"
          value={form.date}
          type={"date"}
          placeholder="dd/mm/aaaa"
          min="2022-07-18"
        />
        <input
          onChange={onChange}
          name="description"
          value={form.description}
          placeholder="Descrição"
          pattern="^.{15,}"
          title="A resposta deve ter no minimo 30 letras"
        />
        <input
          onChange={onChange}
          name="durationInDays"
          value={form.durationInDays}
          type={"number"}
          placeholder="Duração em dias"
          pattern="^.{50,}"
          title="A viagem deve conter no minino 50 dias"
        />
        <button>Criar</button>
      </ContainerForm>
      <ButtonBack onClick={() => goBack(navigate)}>Voltar</ButtonBack>
    </div>
  );
}
export default CreateTripPage;
