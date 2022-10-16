import {baseApi} from "./base"

export const profileAPI = {
  getProfile(userId: string) {
    return baseApi.get(`profile/${userId}`).then(response => response.data)
  }
}