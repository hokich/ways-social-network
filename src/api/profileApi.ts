import {baseApi} from "./base"

export const profileAPI = {
  getProfile(userId: string) {
    return baseApi.get(`profile/${userId}`).then(response => response.data)
  },
  getStatus(userId: string) {
    return baseApi.get(`profile/status/${userId}`).then(response => response.data)
  },
  updateStatus(status: string | null) {
    return baseApi.put('profile/status', {status: status}).then(response => response.data)
  }
}