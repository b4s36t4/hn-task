import axios from "axios";


export const processAxios = () => {
  axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
};
