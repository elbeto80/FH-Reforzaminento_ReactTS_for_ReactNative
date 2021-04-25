// import qs from 'querystring'
import axios from "axios";

export const Backend = axios.create({
  baseURL: "https://reqres.in/api",
});
