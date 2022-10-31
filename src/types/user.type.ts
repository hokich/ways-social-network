import {PhotosType} from "./photos.type"

export type UserType = {
  id: number
  name: string
  status: string | null
  followed: boolean
  photos: PhotosType
}