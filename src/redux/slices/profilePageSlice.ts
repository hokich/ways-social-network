import {createSlice} from "@reduxjs/toolkit"

import {profileAPI} from "../../api/profileApi"
import {AppDispatch} from "../store"
import {ProfileType} from "../../types/profile.type"

interface InitialStateType {
  profile: ProfileType | null
  error: string | null
  isFetching: boolean
}

const initialState: InitialStateType = {
  profile: null,
  error: null,
  isFetching: false,
}

export const getProfile = (userId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getProfile(userId).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setProfile(data))
    })
  }
}

const profilePageSlice = createSlice({
  name: "profilePage",
  initialState,
  reducers: {
    setProfile: (state, action: {payload: ProfileType}) => {
      state.profile = action.payload
    },
    toggleIsFetching: (state, action: { payload: boolean }) => {
      state.isFetching = action.payload
    },
  }
})

export const {
  setProfile,
  toggleIsFetching,
} = profilePageSlice.actions

export default profilePageSlice.reducer