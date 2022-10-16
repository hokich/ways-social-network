import {baseApi} from "./base"

export const authAPI = {
  getMe() {
    return baseApi.get(`auth/me`).then(response => response.data)
  }
}