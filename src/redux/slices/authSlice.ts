import {createSlice} from "@reduxjs/toolkit"

import {AppDispatch, RootState} from "../store"
import {authAPI} from "../../api/authApi"
import {AuthMeType} from "../../types/auth.type"
import {LoginDataType} from "../../types/login.type"
import {ErrorType} from "../../types/error.type"

interface InitialStateType {
  me: AuthMeType | null
  isAuth: boolean
  error: ErrorType | null
}

const initialState: InitialStateType = {
  me: null,
  isAuth: false,
  error: null
}

export const getMe = () => (dispatch: AppDispatch) => {
  return authAPI.getMe().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthMeData({me: data.data, isAuth: true, error: null}))
    }
  })
}

export const login = ({email, password, rememberMe}: LoginDataType) => {
  return (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(getMe())
      } else {
        dispatch(setError({type: 'server', message: data.messages[0]}))
      }
    })
  }
}

export const logout = () => {
  return (dispatch: AppDispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthMeData({me: null, isAuth: false, error: null}))
      }
    })
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthMeData: (state, action: { payload: InitialStateType }) => {
      state.me = action.payload.me
      state.isAuth = action.payload.isAuth
    },
    setError: (state, action: { payload: ErrorType }) => {
      state.error = action.payload
    }
  }
})

export const selectAuthMe = (state: RootState) => state.auth.me

export const selectMeUserId = (state: RootState) => selectAuthMe(state)?.id

export const {
  setAuthMeData,
  setError
} = authSlice.actions

export default authSlice.reducer