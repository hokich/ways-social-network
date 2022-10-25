import {configureStore} from "@reduxjs/toolkit"

import appReducer from "./slices/appSlice"
import usersReducer from "./slices/usersSlice"
import profilePageReducer from "./slices/profileSlice"
import authReducer from "./slices/authSlice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    users: usersReducer,
    profile: profilePageReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch