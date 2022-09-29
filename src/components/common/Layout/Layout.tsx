import styles from "./Layout.module.scss"

import {PropsWithChildren} from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Container from "../../ui/Container";

interface LayoutProps extends PropsWithChildren{
}

const Layout = ({children}: LayoutProps) => (
  <div className={styles.root}>
    <Header/>
    <Container>
      <Sidebar/>
      <div className="content">
        {children}
      </div>
    </Container>
    <Footer/>
  </div>
)

export default Layout