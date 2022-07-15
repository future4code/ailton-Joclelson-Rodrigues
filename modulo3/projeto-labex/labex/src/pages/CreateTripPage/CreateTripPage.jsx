import React from "react";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls"

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

    axios.post(`${BASE_URL}/joclelson-rodrigues-ailton/trips`, form, {
        headers: {
            auth: token
        }
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
    cleanFields()
  }

  return (
    <div>
      <h1>Criar Viagem</h1>
      <form onSubmit={createTrips}>
        <input
          onChange={onChange}
          name="name"
          value={form.name}
          placeholder="Nome"
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
        />
        <input
          onChange={onChange}
          name="description"
          value={form.description}
          placeholder="Descrição"
        />
        <input
          onChange={onChange}
          name="durationInDays"
          value={form.durationInDays}
          type={"number"}
          placeholder="Duração em dias"
        />
        <button>Criar</button>
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
}
export default CreateTripPage;
