import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { ContainerForm, ContainerDad } from "./styled";
import { listCountries } from "../../components/listCountries";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";


function ApplicationFormPage() {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: ""
  });
  

  const applyToTrip = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}/trips/${form.trip}/apply`, form)
    .then((res) => {
      cleanFields()
      alert("Sua inscrição foi enviada!")
    })
    .catch((err) => {alert(err)})
  }

  const [tripSelect, ] = useRequestData(
    `${BASE_URL}/trips`
  );

  return (
    <ContainerDad>
      <h2>Inscreva-se para uma viagem</h2>
      <ContainerForm onSubmit={applyToTrip}>
        <select onChange={onChange} value={form.trip} name={"trip"}>
          <option>Escolha uma viagem</option>
          {tripSelect?.map((count) => {
            return <option value={count.id}>
              {count.name}
              </option>;
          })}
        </select>

        <input
          value={form.name}
          onChange={onChange}
          name={"name"}
          placeholder="Nome"
          pattern="^.{3,}"
          title="O nome deve ter no minimo 3 letras"
          required
        />
        <input
          value={form.age}
          onChange={onChange}
          name={"age"}
          placeholder="Idade"
          type={"number"}
          min={"18"}
          required
        />
        <input
          value={form.applicationText}
          onChange={onChange}
          name={"applicationText"}
          placeholder="Texto de Candidatura"
          pattern="^.{15,}"
          title="A resposta deve ter no minimo 30 letras"
          required
        />
        <input
          value={form.profession}
          onChange={onChange}
          name={"profession"}
          placeholder="Profissão"
          pattern="^.{6,}"
          title="A profissão deve ter no minimo 10 letras"
          required
        />
        <select onChange={onChange} value={form.country} name={"country"}>
          <option>Escolha um pais</option>
          {listCountries.map((count) => {
            return <option>{count}</option>;
          })}
        </select>

        <button>Enviar</button>
      </ContainerForm>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </ContainerDad>
  );
}
export default ApplicationFormPage;
