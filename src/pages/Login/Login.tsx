import styles from "./Login.module.scss"
import LoginForm from "../../components/forms/LoginForm";

interface LoginProps {

}

const Login = ({}: LoginProps) => {

  const loginFromSubmitHandler = (data: any) => {
    console.log(data)
  }

  return (
    <div className={styles.root}>
      <h1>Login</h1>
      <LoginForm onSubmit={loginFromSubmitHandler}/>
    </div>
  )
}

export default Login