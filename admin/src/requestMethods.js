import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzQxMTYyNzFmYzE4NTYzNTY2NGQ5MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTg0NDgyNCwiZXhwIjoxNjM2MTA0MDI0fQ.K3-AuitGZoIriImV-tWOyy49N54p6ZL335XKDXIWOe4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
