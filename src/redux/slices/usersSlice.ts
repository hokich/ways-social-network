import {createSlice} from "@reduxjs/toolkit"
import {UserType} from "../../types/user.type"

interface InitialStateType {
  items: UserType[]
  totalCount: number
  error: string | null
  isFetching: boolean
  followingInProgress: number[]
}

const initialState: InitialStateType = {
  items: [],
  totalCount: 0,
  error: null,
  isFetching: false,
  followingInProgress: []
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.items = action.payload
    },
    toggleIsFetching: (state, action: { payload: boolean }) => {
      state.isFetching = action.payload
    },
    toggleFollowingProgress: (state, action: { payload: { userId: number, isFetching: boolean } }) => {
      if (action.payload.isFetching) {
        state.followingInProgress.push(action.payload.userId)
      } else {
        state.followingInProgress = state.followingInProgress.filter(id => id != action.payload.userId)
      }
    },
    follow: (state, action: { payload: number }) => {
      let user = state.items.find(user => user.id === action.payload)
      if (user) {
        user.followed = true
      }
    },
    unfollow: (state, action: { payload: number }) => {
      let user = state.items.find(user => user.id === action.payload)
      if (user) {
        user.followed = false
      }
    }
  }
})

export const {setUsers, toggleIsFetching, toggleFollowingProgress, follow, unfollow} = usersSlice.actions

export default usersSlice.reducer