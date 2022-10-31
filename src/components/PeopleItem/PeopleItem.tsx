import styles from "./PeopleItem.module.scss"

import {NavLink} from "react-router-dom"

import ProfileImage from "../profile/ProfileImage"
import {UserType} from "../../types/user.type"

interface PeopleItemProps {
  user: UserType
  isLoading: boolean
  follow: () => void
  unfollow: () => void
}

const PeopleItem = ({user, isLoading, follow, unfollow}: PeopleItemProps) => {
  return (
    <div className={styles.root}>
      <NavLink to={`/profile/${user.id}`} className={styles.avatar}>
        <ProfileImage photo={user.photos} size={"small"} round/>
      </NavLink>
      <NavLink to={`/profile/${user.id}`} className={styles.link}>
        <span className={styles.name}>{user.name}</span>
      </NavLink>
      <div className={styles.control}>
        {user.followed ? (
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
    </div>
  )
}

export default PeopleItem