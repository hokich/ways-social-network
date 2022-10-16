import styles from "./Profile.module.scss"

import {ProfileType} from "../../types/profile.type"

interface ProfileProps {
  profile: ProfileType
}

const Profile = ({profile}: ProfileProps) => (
  <div className={styles.root}>
    {profile.userId} {profile.fullName}
  </div>
)

export default Profile