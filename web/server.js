import axios from "axios"

const baseURL = process.env.NLW_APP_API_URL || "https://nlw-ia-deploy.netlify.app";

export const server = axios.create({
    baseURL,
})
