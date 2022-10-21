import styles from "./Login.module.scss"

import LoginForm from "../../components/forms/LoginForm"
import {LoginDataType} from "../../types/login.type"

interface LoginProps {
  login: ({email, password, rememberMe}: LoginDataType) => void
}

const Login = ({login}: LoginProps) => {

  const loginFromSubmitHandler = (data: any) => {
    console.log(data)
    login({...data})
  }

  return (
    <div className={styles.root}>
      <h1>Login</h1>
      <LoginForm onSubmit={loginFromSubmitHandler}/>
    </div>
  )
}

export default Login