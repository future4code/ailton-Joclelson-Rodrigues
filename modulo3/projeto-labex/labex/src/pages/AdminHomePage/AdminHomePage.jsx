import React from "react";
import { useNavigate } from "react-router-dom";
import { goCreateTripPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import { Header, CreateTrip, ListTrip } from "./styled";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { useRequestData } from "../../Hooks/useRequestData";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loading from "../../components/Loading"

function AdminHomePage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useProtectedPage();

  const TripDetailsPage = (id) => {
    navigate(`/admin/trips/${id}`);
  };
  

  const [listTrips, removeLoading] = useRequestData(`${BASE_URL}/trips`);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const deleteTrip = (id) => {
    if (window.confirm("Deseja excluir essa viagem ?") === true){
        axios
          .delete(`${BASE_URL}/trips/${id}`, {
            headers: {
              auth: token,
            },
          })
          .then((res) => {
            console.log(res);
            
          })
          .catch((err) => {
            console.log(err);
          });
    }
    
  };

  return (
    <div>
      <Header>
        <h2>Painel Administrativo</h2>
        <div>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>JR</Avatar>
          <FontAwesomeIcon
            onClick={logout}
            id="buttonLogout"
            icon={faRightFromBracket}
          />
        </div>
      </Header>
      <CreateTrip>
        <FontAwesomeIcon
          id="buttonCreate"
          onClick={() => goCreateTripPage(navigate)}
          icon={faCirclePlus}
        />
      </CreateTrip>

      {listTrips?.map((trip) => {
        return (
          <ListTrip key={trip.id}>
            <p onClick={() => TripDetailsPage(trip.id)}>{trip.name}</p>
            <FontAwesomeIcon
              onClick={() => deleteTrip(trip.id)}
              id="buttonTrash"
              icon={faTrashCan}
            />
          </ListTrip>
        );
      })}
      {!removeLoading && <Loading />}
    </div>
  );
}

export default AdminHomePage;
