import styles from "./Header.module.scss"

import {NavLink} from "react-router-dom"

import Logo from "../../icons/Logo"
import Container from "../../ui/Container";

interface HeaderProps {
}

const Header = ({}: HeaderProps) => (
  <div className={styles.root}>
    <Container>
      <header className={styles.header}>
        <NavLink to={"/"} className={styles.logo}>
          <Logo width={86} height={30}/>
        </NavLink>
      </header>
    </Container>
  </div>
)

export default Header