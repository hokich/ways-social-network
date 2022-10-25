import React from "react"
import {connect, ConnectedProps} from "react-redux"
import {Navigate} from "react-router-dom"

import {RootState} from "../../redux/store"
import {login} from "../../redux/slices/authSlice"
import Login from "./Login"

const LoginContainer = ({isAuth, error, login}: LoginContainerProps) => {
  if (isAuth) {
    return <Navigate to={`/profile`}/>
  }

  return <Login error={error} login={login}/>
}

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
  error: state.auth.error
})

const connector = connect(mapStateToProps, {login})

type LoginContainerProps = ConnectedProps<typeof connector>

export default connector(LoginContainer) as React.ComponentType