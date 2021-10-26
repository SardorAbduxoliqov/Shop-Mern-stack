import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzI5M2YxMDE3MDc3OTljNjdiNGNhOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzUyMTU3MDAsImV4cCI6MTYzNTQ3NDkwMH0.ldWW7zbW1SYcfxQNJfcT2gpJa-Uwuzuf3XRHYwt-RpY";

export const publicRequest = axios.create({
 baseURL: BASE_URL
});

export const userRequest = axios.create({
 baseURL: BASE_URL,
 headers: { token: `Bearer ${TOKEN}` }
});