import styles from "./Sidebar.module.scss"

import {NavLink} from "react-router-dom"

interface SidebarProps {
}

const Sidebar = ({}: SidebarProps) => (
  <nav className={styles.menu}>
    <NavLink to={"/"} className={styles.link}>Home</NavLink>
    <NavLink to={"/messages"} className={styles.link}>Messages</NavLink>
    <NavLink to={"/profile"} className={styles.link}>Profile</NavLink>
    <NavLink to={"/friends"} className={styles.link}>Friends</NavLink>
    <NavLink to={"/peoples"} className={styles.link}>Peoples</NavLink>
  </nav>
)

export default Sidebar