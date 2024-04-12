import axios from "axios";

export const processAxios = () => {
  axios.defaults.baseURL = import.meta.env.VITE_APP_HN_API;
};
