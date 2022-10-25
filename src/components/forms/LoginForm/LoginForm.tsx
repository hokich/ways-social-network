import styles from "./LoginForm.module.scss"

import {useEffect} from "react"
import {useForm} from "react-hook-form"

import TextInput from "../../ui/TextInput"
import {ErrorType} from "../../../types/error.type"

interface LoginFormProps {
  error: ErrorType | null
  onSubmit: (data: any) => void
}

const LoginForm = ({error, onSubmit}: LoginFormProps) => {
  const {register, setError, formState: {errors: formErrors}, handleSubmit} = useForm({
    mode: "onBlur"
  })

  useEffect(() => {
    console.log('errors', formErrors)
    if (error) {
      setError("email", error)
      setError("password", error)
    }
  }, [error, formErrors])

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <span className={styles.errorText}>{error.message}</span>
      )}
      <TextInput
        {...register("email", {
          required: true,
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        })}
        type={"text"}
        placeholder={"email"}
        isError={!!formErrors.email}
      />
      <TextInput
        {...register("password", {required: true})}
        type={"password"}
        placeholder={"password"}
        isError={!!formErrors.password}
      />
      <label className={styles.checkboxInputLabel}>
        <input {...register("rememberMe")} type={"checkbox"} className={styles.checkboxInput}/>
        <span>Remember Me</span>
      </label>
      <button className={styles.button}>Login</button>
    </form>
  )
}

export default LoginForm