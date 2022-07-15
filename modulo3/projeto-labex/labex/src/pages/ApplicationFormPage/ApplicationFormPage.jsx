import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import useForm from "../../Hooks/useForm";
import { ContainerCad } from "./styled";
import { listCountries } from "../../components/listCountries";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/urls"

function ApplicationFormPage() {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  
  const tripSelect = useRequestData(`${BASE_URL}/joclelson-rodrigues-ailton/trips`)

  return (
    <>
      <ContainerCad>
        <h1>Inscreva-se para uma viagem</h1>
        <form>
        <select onChange={onChange} value={""} name={""}>
          <option>Escolha uma viagem</option>
          {tripSelect?.map((count) => {
            return <option>{count.name}</option>;
          })}
        </select>

        <input
          value={form.name}
          onChange={onChange}
          name={"name"}
          placeholder="Nome"
        />
        <input
          value={form.age}
          onChange={onChange}
          name={"age"}
          placeholder="Idade"
        />
        <input
          value={form.applicationText}
          onChange={onChange}
          name={"applicationText"}
          placeholder="Texto de Candidatura"
        />
        <input
          value={form.profession}
          onChange={onChange}
          name={"profession"}
          placeholder="Profissão"
        />
        <select onChange={onChange} value={form.country} name={"country"}>
          <option>Escolha um pais</option>
          {listCountries.map((count) => {
            return <option>{count}</option>;
          })}
        </select>

        <button>Enviar</button>
        </form>
      </ContainerCad>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </>
  );
}
export default ApplicationFormPage;
