import axios from "axios"

const baseURL = process.env.nlw_app || "https://nlw-ia-deploy.netlify.app";

export const server = axios.create({
    baseURL,
})
