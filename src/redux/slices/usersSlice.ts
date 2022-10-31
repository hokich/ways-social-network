import {createSlice} from "@reduxjs/toolkit"

import {usersAPI} from "../../api/usersApi"
import {AppDispatch, RootState} from "../store"
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

export const getUsers = (currentPage = 1, perPage = 10) => {
  return (dispatch: AppDispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, perPage).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
    })
  }
}

export const follow = (userId: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(toggleFollowingProgress({userId, isFetching: true}))
    usersAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setFollow(userId))
      }
      dispatch(toggleFollowingProgress({userId, isFetching: false}))
    })
  }
}

export const unfollow = (userId: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(toggleFollowingProgress({userId, isFetching: true}))
    usersAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUnfollow(userId))
      }
      dispatch(toggleFollowingProgress({userId, isFetching: false}))
    })
  }
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
    setFollow: (state, action: { payload: number }) => {
      let user = state.items.find(user => user.id === action.payload)
      if (user) {
        user.followed = true
      }
    },
    setUnfollow: (state, action: { payload: number }) => {
      let user = state.items.find(user => user.id === action.payload)
      if (user) {
        user.followed = false
      }
    }
  }
})

export const selectUsersList = (state: RootState) => {
  return state.users.items
}

export const selectUsersTotalCount = (state: RootState) => {
  return state.users.totalCount
}

export const selectUsersRequestError = (state: RootState) => {
  return state.users.error
}

export const selectUsersIsFetching = (state: RootState) => {
  return state.users.isFetching
}

export const selectUsersFollowingInProgress = (state: RootState) => {
  return state.users.followingInProgress
}

export const {
  setUsers,
  toggleIsFetching,
  toggleFollowingProgress,
  setFollow,
  setUnfollow
} = usersSlice.actions

export default usersSlice.reducer