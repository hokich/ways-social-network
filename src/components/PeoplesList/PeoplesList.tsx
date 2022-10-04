import styles from "./PeoplesList.module.scss"

import PeopleItem from "../PeopleItem"
import {UserType} from "../../types/user.type"

interface PeoplesListProps {
  peoples: UserType[]
}

const PeoplesList = ({peoples}: PeoplesListProps) => {
  const items = peoples.map(people => (
    <PeopleItem
      key={people.id}
      user={people}
    />
  ))
  return (
    <div className={styles.root}>
      {items}
    </div>
  )
}

export default PeoplesList