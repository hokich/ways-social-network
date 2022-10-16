import styles from "./Header.module.scss"

import {NavLink} from "react-router-dom"

import Logo from "../../icons/Logo"
import Container from "../../ui/Container"

interface HeaderProps {
  login?: string
  isAuth: boolean
}

const Header = ({login, isAuth}: HeaderProps) => (
  <div className={styles.root}>
    <Container>
      <header className={styles.header}>
        <NavLink to={"/"} className={styles.logo}>
          <Logo width={86} height={30}/>
        </NavLink>
        <div className={styles.userLayer}>

          {isAuth ? (
            <>
              {login && <span>{login}</span>}
            </>

          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </header>
    </Container>
  </div>
)

export default Header