import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import Loading from "../../components/Loading"
import {
  ContainerDad,
  Header,
  ContainerDetails,
  ContainerCandidate,
  Candidate,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function TripDetailsPage() {
  const [detailTrip, setDetailTrip] = useState({});
  const [contador, setContador] = useState(0);
  const [removeLoading, setRemoveLoading] = useState(false)
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setDetailTrip(res.data.trip);
        setRemoveLoading(true)
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [contador]);

  const token = localStorage.getItem("token");

  const approveCandidate = (id, decide) => {
    const body = {
      approve: decide,
    };
    axios
      .put(
        `${BASE_URL}/trips/${params.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert(`Candidato aprovado`)
        setContador(contador + 1)
      })
      .catch((err) => {
        alert(err.message)
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  useProtectedPage();

  return (
    <ContainerDad>
      <Header>
        <h2>Detalhes da Viagem</h2>
      </Header>
      <ContainerDetails>
        <h2>{`${detailTrip.name}`}</h2>
        <p>{`Nome: ${detailTrip.name}`}</p>
        <p>{`Descrição: ${detailTrip.description}`}</p>
        <p>{`Planeta: ${detailTrip.planet}`}</p>
        <p>{`Duração: ${detailTrip.durationInDays} dias`}</p>
        <p>{`Data: ${detailTrip.date}`}</p> 
      </ContainerDetails>
      <button onClick={goBack}>Voltar</button>
      <h3>Candidatos Pendentes</h3>
      <ContainerCandidate>
        { detailTrip.candidates?.length === 0 && <p>Não há candidatos pendentes</p>}
        { detailTrip.candidates?.map((candidat) => {
          return (
            <Candidate key={candidat.id}>
              <p>{`Nome: ${candidat.name}`}</p>
              <p>{`Profissão: ${candidat.profession}`}</p>
              <p>{`Idade: ${candidat.age}`}</p>
              <p>{`País: ${candidat.country}`}</p>
              <p>{`Texto de Candidatura: ${candidat.applicationText}`}</p>
              <div>
                <FontAwesomeIcon
                  onClick={() => approveCandidate(candidat.id, true)}
                  id="buttonApprov"
                  icon={faCircleCheck}
                />
                <FontAwesomeIcon
                  onClick={() => approveCandidate(candidat.id, false)}
                  id="buttonReprov"
                  icon={faCircleXmark}
                />
              </div>
            </Candidate>
          );
        }) } 

      </ContainerCandidate>
      <h3>Candidatos Aprovados</h3>
      <div>
        { detailTrip.approved?.length === 0 && <p>Não há candidatos aprovados</p>}
        { detailTrip && detailTrip.approved?.map((approvate) => {
          return <li key={approvate.id}>{approvate.name}</li>
        })}
      </div>
    </ContainerDad>
  );
}
export default TripDetailsPage;
