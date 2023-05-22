import axios, { AxiosInstance } from "axios";

const HTTP = axios.create({
  baseURL: "",
  withCredentials: true,
  crossDomain: true,
});

export default HTTP;
