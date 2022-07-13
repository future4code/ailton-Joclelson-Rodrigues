import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ContainerCad } from "./styled";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const [selectTravel, setSelectTravel] = useState("");
  const [selectCountry, setSelectCountry] = useState("");

  const handleChangeTravel = (e) => {
    setSelectTravel(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setSelectCountry(e.target.value);
  };

  return (
    <>
      <ContainerCad>
        <h1>Inscreva-se para uma viagem</h1>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Escolha uma Viagem"
          value={selectTravel}
          size="small"
          onChange={handleChangeTravel}
        >
          <MenuItem value="escolha uma viagem">Escolha uma Viagem</MenuItem>
          <MenuItem value="">Escolha uma Viagem</MenuItem>
          <MenuItem value="">Escolha uma Viagem</MenuItem>
        </Select>

        <TextField required id="outlined-required" label="Nome" size="small" />

        <TextField required id="outlined-required" label="Idade" size="small" />

        <TextField
          required
          id="outlined-required"
          label="Texto de candidatura"
          size="small"
        />

        <TextField
          required
          id="outlined-required"
          label="Profissão"
          size="small"
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Selecione um Pais"
          value={selectCountry}
          size="small"
          onChange={handleChangeCountry}
        >
          <MenuItem value="Brasil">Brasil</MenuItem>
          <MenuItem value="Argentina">Argentina</MenuItem>
          <MenuItem value="Selecione">Selecione</MenuItem>
        </Select>
      </ContainerCad>
      <Button onClick={() => goBack(navigate)} variant="contained" startIcon={<ArrowBackIcon/>}>
        Voltar
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Enviar
      </Button>
    </>
  );
}
export default ApplicationFormPage;
