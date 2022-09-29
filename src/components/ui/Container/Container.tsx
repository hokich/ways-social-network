import styles from "./Container.module.scss"

import cn from "classnames"

import React, {PropsWithChildren} from "react"

interface ContainerProps extends PropsWithChildren {
  className?: string
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const {
    children,
    className
  } = props

  return (
    <div ref={ref} className={cn(styles.container, className)}>{children}</div>
  )
})

Container.displayName = "Container"

export default Container