import {createSlice} from "@reduxjs/toolkit"

import {profileAPI} from "../../api/profileApi"
import {AppDispatch, RootState} from "../store"
import {ProfileType} from "../../types/profile.type"

interface InitialStateType {
  profile: ProfileType | null
  status: string | null
  error: string | null
  isFetching: boolean
}

const initialState: InitialStateType = {
  profile: null,
  status: null,
  error: null,
  isFetching: false,
}

export const getProfile = (userId: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getProfile(userId).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setProfile(data))
    })
  }
}

export const getStatus = (userId: number) => {
  return (dispatch: AppDispatch) => {
    profileAPI.getStatus(userId).then(data => {
      console.log('status', data)
      dispatch(setStatus(data))
    })
  }
}

export const updateStatus = (status: string | null) => {
  return (dispatch: AppDispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

const profileSlice = createSlice({
  name: "profilePage",
  initialState,
  reducers: {
    setProfile: (state, action: {payload: ProfileType}) => {
      state.profile = action.payload
    },
    setStatus: (state, action: {payload: string | null}) => {
      state.status = action.payload
    },
    toggleIsFetching: (state, action: { payload: boolean }) => {
      state.isFetching = action.payload
    },
  }
})

export const selectProfile = (state: RootState) => state.profile.profile

export const selectStatus = (state: RootState) => state.profile.status

export const selectIsFetching = (state: RootState) => state.profile.isFetching

export const {
  setProfile,
  setStatus,
  toggleIsFetching,
} = profileSlice.actions

export default profileSlice.reducer