import styles from "./Layout.module.scss"

import {PropsWithChildren} from "react"
import Header from "../Header"
import Sidebar from "../Sidebar"
import Container from "../../ui/Container"

interface LayoutProps extends PropsWithChildren{
}

const Layout = ({children}: LayoutProps) => (
  <div className={styles.root}>
    <Header/>
    <Container className={styles.container}>
      <Sidebar/>
      <div className="content">
        {children}
      </div>
    </Container>
  </div>
)

export default Layout