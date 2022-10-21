import {baseApi} from "./base"

export const authAPI = {
  getMe() {
    return baseApi.get(`auth/me`).then(response => response.data)
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return baseApi.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
  },
  logout() {
    return baseApi.delete(`auth/login`).then(response => response.data)
  }
}