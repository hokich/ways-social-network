import {connect, ConnectedProps} from "react-redux"

import {getMe} from "../../../redux/slices/authSlice"
import Header from "./Header"
import {RootState} from "../../../redux/store"
import {useEffect} from "react";

const HeaderContainer = ({login, isAuth, getMe}: HeaderContainerProps) => {

  useEffect(() => {
    const res = getMe()
    console.log('login', res)
  }, [])
  console.log('login', login)
  return <Header login={login} isAuth={isAuth}/>
}

const mapStateToProps = (state: RootState) => ({
  login: state.auth.me?.login,
  isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {getMe})

type HeaderContainerProps = ConnectedProps<typeof connector>

export default connector(HeaderContainer)