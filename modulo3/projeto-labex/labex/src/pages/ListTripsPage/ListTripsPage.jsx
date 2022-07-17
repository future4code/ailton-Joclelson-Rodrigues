import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goAppFormPage } from "../../routes/coordinator";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Button from "@mui/material/Button";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { ContainerDad, ContainerTrips, ListTrip } from "./styled"
import Loading from "../../components/Loading"

function ListTripsPage() {
  const navigate = useNavigate();

  const [listTrips, removeLoading] = useRequestData(
    `${BASE_URL}/trips`
  );

  return (
    <ContainerDad>
      
      <h2>Lista de Viagem</h2>
      <div>
      <Button
        onClick={() => goBack(navigate)}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        Voltar
      </Button>
      <Button
        onClick={() => goAppFormPage(navigate)}
        variant="contained"
        endIcon={<HowToRegIcon />}
      >
        Inscrever-se
      </Button>
      </div>
      <ContainerTrips>
      {listTrips?.map((trip) => {
        return (
          <ListTrip key={trip.id}>
            <p>{`Nome:${trip.name}`}</p>
            <p>{`Descrição: ${trip.description}`}</p>
            <p>{`Planeta: ${trip.planet}`}</p>
            <p>{`Duração: ${trip.durationInDays} dias`}</p>
            <p>{`Data: ${trip.date}`}</p>
          </ListTrip>
        );
      })}
      {!removeLoading && <Loading />}
      </ContainerTrips>
    </ContainerDad>
  );
}
export default ListTripsPage;
