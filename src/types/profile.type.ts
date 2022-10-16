import {PhotosType} from "./photos.type"

export type ProfileType = {
  userId: number
  aboutMe: string | null
  contacts: ProfileContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  photos: PhotosType
}

export type ProfileContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}