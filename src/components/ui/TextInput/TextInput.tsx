import styles from "./TextInput.module.scss"

import React from "react"
import {UseFormRegister} from "react-hook-form";
import cn from "classnames";


interface TextInputProps {
  type: "text" | "password"
  isError: boolean
  label?: string
  placeholder?: string
}


const TextInput = React.forwardRef<HTMLInputElement,
  TextInputProps & ReturnType<UseFormRegister<any>>>(
  ({onChange, onBlur, name, label, type = "text", placeholder = "", isError = false}, ref) => (
    <div className={cn(styles.root, isError && styles.error)}>
      {label && (
        <label>{label}</label>
      )}
      <input ref={ref} name={name} onChange={onChange} onBlur={onBlur} type={type} placeholder={placeholder}/>
    </div>
  ));

export default TextInput