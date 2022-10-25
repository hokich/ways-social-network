import {createSlice} from "@reduxjs/toolkit"

import {AppDispatch, RootState} from "../store"
import {getMe} from "./authSlice"

interface InitialStateType {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
}

export const initializeApp = () => (dispatch: AppDispatch) => {
  const getMePromise = dispatch(getMe())
  Promise.all([getMePromise]).then(() => {
    dispatch(setInitializedSuccess())
  })
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitializedSuccess: (state) => {
      state.initialized = true
    },
  }
})

export const selectAppInitialized = (state: RootState) => state.app.initialized

export const {
  setInitializedSuccess
} = appSlice.actions

export default appSlice.reducer