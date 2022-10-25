import styles from "./Login.module.scss"

import LoginForm from "../../components/forms/LoginForm"
import {LoginDataType} from "../../types/login.type"
import {ErrorType} from "../../types/error.type"

interface LoginProps {
  error: ErrorType | null
  login: ({email, password, rememberMe}: LoginDataType) => any
}

const Login = ({error, login}: LoginProps) => {

  const loginFromSubmitHandler = (data: any) => {
    login({...data})
  }

  return (
    <div className={styles.root}>
      <h1>Login</h1>
      <LoginForm onSubmit={loginFromSubmitHandler} error={error}/>
    </div>
  )
}

export default Login