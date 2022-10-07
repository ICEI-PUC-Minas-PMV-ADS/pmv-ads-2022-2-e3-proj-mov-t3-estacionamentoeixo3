import axios from "axios";

const api = axios.create({ baseURL: "https://whypark.herokuapp.com" });
export default api;
