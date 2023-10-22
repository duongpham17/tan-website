import axios from 'axios';

const DEVELOPMENT_URL= "http://localhost:3000";
const PRODUCTION_URL= "https://www.thenailist.co.uk";
const url = process.env.NODE_ENV === "development" ? DEVELOPMENT_URL : PRODUCTION_URL;

const storage = typeof window === "undefined" ? "" :  localStorage.getItem("user");

const user = storage ? JSON.parse(storage) : {};

export const api = axios.create({
    baseURL:`${url}`,
    headers: {
        "Content-Type" : "application/json",
        "Authorization": `${user.token}`
    },
});

export default api