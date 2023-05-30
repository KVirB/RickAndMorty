import axios from "axios";

const defaultOptions = {
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
};

let baseRout = axios.create(defaultOptions);

// baseRout.interceptors.request.use(function (config) {
//   const token = JSON.parse(localStorage.getItem("user")).access_token;
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

export const getCharacters = () => {
  return baseRout.get(`/character/`).then((response) => {
    return response.data;
  });
};
