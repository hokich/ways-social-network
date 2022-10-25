import {baseApi} from "./base"

export const profileAPI = {
  getProfile(userId: number) {
    return baseApi.get(`profile/${userId}`).then(response => response.data)
  },
  getStatus(userId: number) {
    return baseApi.get(`profile/status/${userId}`).then(response => response.data)
  },
  updateStatus(status: string | null) {
    return baseApi.put('profile/status', {status: status}).then(response => response.data)
  }
}