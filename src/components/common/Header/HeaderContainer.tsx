import {connect, ConnectedProps} from "react-redux"

import {getMe, logout} from "../../../redux/slices/authSlice"
import Header from "./Header"
import {RootState} from "../../../redux/store"
import {useEffect} from "react";

const HeaderContainer = ({login, isAuth, getMe, logout}: HeaderContainerProps) => {

  useEffect(() => {
    getMe()
  }, [])
  return <Header isAuth={isAuth} login={login} logout={logout}/>
}

const mapStateToProps = (state: RootState) => ({
  login: state.auth.me?.login,
  isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {getMe, logout})

type HeaderContainerProps = ConnectedProps<typeof connector>

export default connector(HeaderContainer)