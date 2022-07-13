import React from "react";
import { useNavigate } from "react-router-dom";
import { goCreateTripPage, goBack } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import { Header, ListTrip } from "./styled";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { useRequestData } from "../../Hooks/useRequestData";

function AdminHomePage() {
  const navigate = useNavigate();

  const listTrips = useRequestData(
    `${BASE_URL}/joclelson-rodrigues-ailton/trips`
  );

  return (
    <div>
      <Header>
        <h2>Painel Administrativo</h2>
        <div>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>JR</Avatar>
          <Button variant="outlined" endIcon={<ExitToAppIcon />}>
            Sair
          </Button>
        </div>
      </Header>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goCreateTripPage(navigate)}>Criar Viagem</button>
      {listTrips?.map((trip) => {
        return (
          <ListTrip key={trip.id}>
            {trip.name}
            <IconButton aria-label="delete" size="large">
              <DeleteIcon />
            </IconButton>
          </ListTrip>
        );
      })}
    </div>
  );
}

export default AdminHomePage;
