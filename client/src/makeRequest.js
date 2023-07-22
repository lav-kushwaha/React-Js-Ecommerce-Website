import axios from "axios";
//I have created this makeRequest bcz i dont want to write this code again and again.
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " +process.env.REACT_APP_API_TOKEN,
  }
});