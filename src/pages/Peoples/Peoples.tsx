import styles from "./Peoples.module.scss"

import PeoplesList from "../../components/PeoplesList"

interface PeoplesProps {
}

const Peoples = ({}: PeoplesProps) => (
  <div className={styles.root}>
    <PeoplesList/>
  </div>
)

export default Peoples