import React from "react"
import {Navigate} from "react-router-dom"
import {connect, ConnectedProps} from "react-redux"

import {RootState} from "../../redux/store"

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
  const WithAuthRedirect = ({isAuth, ...props}: WithAuthRedirectProps) => {
    return isAuth ? <Component {...props as P}/> : <Navigate to={"/login"}/>
  }

  const connector = connect(mapStateToProps, {})
  type WithAuthRedirectProps = ConnectedProps<typeof connector>

  return connector(WithAuthRedirect)
}