import axios from "axios"

const baseURL = process.env.NLW_APP_API_URL || "http://localhost:3333";

export const server = axios.create({
    baseURL,
})
