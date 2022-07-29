import axios from "axios";

export const API = 'http://10.171.226.94:8080/api/v1';

export const postMedication = async query => {
  const url = `${API}/medications`;
  return await axios.post(url,query);
};
