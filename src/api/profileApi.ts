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
  },
  savePhoto(photo: File) {
    const formData = new FormData()
    formData.append("image", photo)
    return baseApi.put('profile/photo', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(response => response.data)
  }
}