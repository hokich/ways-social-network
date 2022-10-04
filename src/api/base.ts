import axios from "axios"

export const baseApi = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "e50dc40b-29b7-46b4-948a-45b986058ab1"
  }
})