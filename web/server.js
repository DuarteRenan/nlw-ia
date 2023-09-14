import axios from "axios"


export const server = axios.create({
    baseURL: "https://nlw-ia-deploy.netlify.app",
})
