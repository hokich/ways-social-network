import {connect, ConnectedProps} from "react-redux"

import {RootState} from "../../../redux/store"
import {logout} from "../../../redux/slices/authSlice"
import Header from "./Header"

const HeaderContainer = ({login, isAuth, logout}: HeaderContainerProps) => {
  return <Header isAuth={isAuth} login={login} logout={logout}/>
}

const mapStateToProps = (state: RootState) => ({
  login: state.auth.me?.login,
  isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {logout})

type HeaderContainerProps = ConnectedProps<typeof connector>

export default connector(HeaderContainer)