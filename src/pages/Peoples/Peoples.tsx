import styles from "./Peoples.module.scss"

import PeoplesList from "../../components/PeoplesList"

const Peoples = () => (
  <div className={styles.root}>
    <PeoplesList/>
  </div>
)

export default Peoples