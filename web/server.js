import axios from "axios"

const baseURL = process.env.NLW_APP_API_URL;

export const server = axios.create({
    baseURL,
})
