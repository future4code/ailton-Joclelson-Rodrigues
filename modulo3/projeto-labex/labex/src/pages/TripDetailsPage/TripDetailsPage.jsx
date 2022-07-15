import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";

function TripDetailsPage() {
    const [detailTrip, setDetailTrip] = useState({})
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/joclelson-rodrigues-ailton/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setDetailTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  useProtectedPage();

  return (
    <div>
      <h1>Página Detalhes Viagem</h1>
      <button onClick={goBack}>Voltar</button>
      <div>
        <h2>{`${detailTrip.name}`}</h2>
        <p>{`Nome: ${detailTrip.name}`}</p>
        <p>{`Descrição: ${detailTrip.description}`}</p>
        <p>{`Planeta: ${detailTrip.planet}`}</p>
        <p>{`Duração: ${detailTrip.durationInDays}`}</p>
        <p>{`Data: ${detailTrip.date}`}</p>
      </div>
    </div>
  );
}
export default TripDetailsPage;
