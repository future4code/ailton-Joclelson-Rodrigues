import axios from "axios";

export const consultaCep = async (cep: string) => {
  try {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return res.data;
  } catch (error) {
    return null;
  }
};
