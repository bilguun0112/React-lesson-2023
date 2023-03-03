import axios from 'axios';

const API_URL = 'http://localhost:8080'; // change this to the URL of your server

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// use axiosInstance to make API requests

export default axiosInstance;