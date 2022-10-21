import {createSlice} from "@reduxjs/toolkit"

import {AppDispatch} from "../store"
import {authAPI} from "../../api/authApi"
import {AuthMeType} from "../../types/auth.type"
import {LoginDataType} from "../../types/login.type"

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
    authAPI.getMe().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthMeData({me: data.data, isAuth: true}))
      }
    })
  }
}

export const login = ({email, password, rememberMe}: LoginDataType) => {
  return (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(getMe())
      }
    })
  }
}

export const logout = () => {
  return (dispatch: AppDispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthMeData({me: null, isAuth: false}))
      }
    })
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthMeData: (state, action: {payload: InitialStateType}) => {
      state.me = action.payload.me
      state.isAuth = action.payload.isAuth
    },
  }
})

export const {
  setAuthMeData
} = authSlice.actions

export default authSlice.reducer