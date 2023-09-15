import axios from "axios"

const baseURL = process.env.nlw || "https://nlw-ia-deploy.netlify.app";

export const server = axios.create({
    baseURL,
})
