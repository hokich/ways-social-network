import {createSlice} from "@reduxjs/toolkit"

import {AppDispatch} from "../store"
import {AuthMeType} from "../../types/auth.type"
import {authAPI} from "../../api/authApi"

interface InitialStateType {
  me: AuthMeType | null
  isAuth: boolean
}

const initialState: InitialStateType = {
  me: null,
  isAuth: false
}

export const getMe = () => {
  return (dispatch: AppDispatch) => {
    console.log('getMe')
    authAPI.getMe().then(data => {
      if (data.resultCode === 0) {
        console.log(data)
        dispatch(setAuthMeData(data.data))
      }
    })
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthMeData: (state, action: {payload: AuthMeType}) => {
      state.me = action.payload
      state.isAuth = true
    },
  }
})

export const {
  setAuthMeData
} = authSlice.actions

export default authSlice.reducer