import axios from "axios";

export const AUTH_CODE = 'YMhvBLRmW9ITdArUeUYlRTZvErTEp0oxkp7deStwqm0';
export const ACCESS_KEY = 'Yowcv0sgbnyLnkq9VvAs3LNUSOyfZwNo6nny9y25VY8';
export const SECRET_KEY = 'txdin-MFP40DcYTeap5KxNMdSYid9-c8J_7pl0wCOVc';
export const CLIENT_ID_STRING = `client_id=${ACCESS_KEY}`;

export const unsplashAPI = axios.create({
  baseURL: `https://api.unsplash.com`
});