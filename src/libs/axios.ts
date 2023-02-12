import { API_URL } from '@config/app';
import storage from '@libs/storage';
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getItem('token');
  if (token) {
    if (config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }
  }
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
