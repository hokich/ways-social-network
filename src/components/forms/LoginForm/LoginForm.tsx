import styles from "./LoginForm.module.scss"

import {useForm} from "react-hook-form"
import TextInput from "../../ui/TextInput";

interface LoginFormProps {
  onSubmit: (data: any) => void
}

const LoginForm = ({onSubmit}: LoginFormProps) => {
  const {register, formState: { errors }, handleSubmit} = useForm({
    mode: 'onBlur'
  });

  console.log(errors)

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('email', {
          required: true,
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        })}
        type="text"
        placeholder={"email"}
        isError={!!errors.email}
      />
      <TextInput
        {...register('password', {required: true})}
        type="password"
        placeholder={"password"}
        isError={!!errors.password}
      />
      <label className={styles.checkboxInputLabel}>
        <input {...register('rememberMe')} type="checkbox" className={styles.checkboxInput}/>
        <span>Remember Me</span>
      </label>
      <button className={styles.button}>Login</button>
    </form>
  )
}

export default LoginForm