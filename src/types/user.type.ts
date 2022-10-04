export type UserType = {
  id: number
  name: string
  status: string | null
  followed: boolean
  photos: UserPhotosType
}

export type UserPhotosType = {
  small: string | null
  large: string | null
}