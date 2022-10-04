import {baseApi} from "./base"

type PostResponseType = {
  resultCode: number
  messages: string[]
  data: {}
}

export const usersAPI = {
  getUsers(currentPage=1, perPage=10) {
    return baseApi.get(`users/?page=${currentPage}&count=${perPage}`).then(response => response.data)
  },
  follow(userId: number) {
    return baseApi.post(`follow/${userId}`).then<PostResponseType>(response => response.data)
  },
  unfollow(userId: number) {
    return baseApi.delete(`follow/${userId}`).then<PostResponseType>(response => response.data)
  },
}