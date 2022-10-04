import styles from "./PeopleItem.module.scss"

import {NavLink} from "react-router-dom"

interface PeopleItemProps {
  id: number
  name: string
  status: string | null
  followed: boolean
  photo: string | null
  isLoading: boolean
  follow: () => void
  unfollow: () => void
}

const PeopleItem = ({id, name, status, followed, photo, isLoading, follow, unfollow}: PeopleItemProps) => {
  return (
    <div className={styles.root}>
      <NavLink to={`/profile/${id}`} className={styles.link}>
        <span className={styles.name}>{name}</span>
      </NavLink>
      {followed ? (
        <button
          disabled={isLoading}
          className={styles.followButton}
          onClick={unfollow}
        >Unfollow</button>
      ) : (
        <button
          disabled={isLoading}
          className={styles.followButton}
          onClick={follow}
        >Follow</button>
      )}
    </div>
  )
}

export default PeopleItem